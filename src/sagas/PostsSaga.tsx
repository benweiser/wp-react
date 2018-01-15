import { receiveAPIData } from "../actions/index";
import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA } from "../constants/index";
import makeRequest from "./RequestData";

function* getApiData() {
  try {
    // do api call
    const data = yield call(makeRequest);
    yield put(receiveAPIData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchAPIData(): IterableIterator<{}> {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
