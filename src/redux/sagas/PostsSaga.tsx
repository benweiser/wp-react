import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA } from "../action-types/index";
import makeRequest from "./RequestData";
import { receiveAPIData } from "../actions/PostsActions";

function* getApiData() {
  try {
    // do api call
    const data = yield call(makeRequest);
    yield put(receiveAPIData(data));
    // console.log("saga data", data);
  } catch (e) {
    console.log(e);
  }
}

export default function* watchAPIData(): IterableIterator<{}> {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
