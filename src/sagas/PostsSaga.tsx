import { receiveApiData } from "../actions/index";
import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA } from "../constants/index";
import makeRequest from "./RequestData";

function* getApiData() {
  try {
    // do api call
    const data = yield call(makeRequest);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchAPIData(): IterableIterator<{}> {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
