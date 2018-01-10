import { delay } from "redux-saga";
import { all, put, takeEvery } from "redux-saga/effects";
import { INCREMENT_ENTHUSIASM } from "../constants/index";
import * as constants from "../constants";

export function* helloSaga(): IterableIterator<{}> {
  console.log("Hello Sagas!");
}

export function* incrementAsync(): IterableIterator<{}> {
  console.log("async stuff", yield delay(1000));
  yield delay(500000);
  yield put({ type: constants.ASYNC_INCREMENT_ENTHUSIASM });
}

export function* watchIncrementAsync(): IterableIterator<{}> {
  yield takeEvery(INCREMENT_ENTHUSIASM, incrementAsync);
}

export default function* rootSaga() {
  yield all([
     helloSaga(),
     watchIncrementAsync()
  ]);
}

function* idMaker() {
  var index = 0;
  while (index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined