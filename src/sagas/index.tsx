import { delay } from "redux-saga";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  INCREMENT_ENTHUSIASM,
  ASYNC_INCREMENT_ENTHUSIASM
} from "../constants/index";

export function* helloSaga(): IterableIterator<{}> {
  console.log("Hello Sagas!");
}

export function* incrementAsync(): IterableIterator<{}> {
  yield call(delay, 5000);
  yield put({ type: INCREMENT_ENTHUSIASM });
}

export function* watchIncrementAsync(): IterableIterator<{}> {
  yield takeEvery(ASYNC_INCREMENT_ENTHUSIASM, incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
