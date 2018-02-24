import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA } from "../action-types/index";
import makeRequest from "./RequestData";
import { receiveAPIData, RequestAPIData } from "../actions/PostsActions";

function* getApiData(action: RequestAPIData) {
  try {
    // do api call
    const data = yield call(makeRequest, action.method, action.query);
    yield put(receiveAPIData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchAPIData(): IterableIterator<{}> {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
