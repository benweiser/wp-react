import axios from "axios";
import Post from "../models/Post";
import { delay } from "redux-saga";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  INCREMENT_ENTHUSIASM,
  ASYNC_INCREMENT_ENTHUSIASM,
  REQUEST_API_DATA
} from "../constants/index";
import { PostItem } from "../interfaces/PostItem";
import { receiveApiData } from "../actions/index";

const baseUri = "https://benweiser.com/wp-json/wp/v2/";

const fetchAPI = async (query: string = "posts") => {
  try {
    return await axios
      .get(`${baseUri}${query}`)
      .then(response => response.data.map((post: PostItem) => new Post(post)));
  } catch (e) {
    console.log(e);
  }
};

function* getApiData(action: any) {
  try {
    // do api call
    const data = yield call(fetchAPI as any);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* watchAPIData(): IterableIterator<{}> {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export function* helloSaga(): IterableIterator<{}> {
  console.log("Hello Sagas!");
}

export function* incrementAsync(): IterableIterator<{}> {
  yield call(delay, 5000);
  yield put({ type: INCREMENT_ENTHUSIASM });
}

// watcher saga
export function* watchIncrementAsync(): IterableIterator<{}> {
  yield takeEvery(ASYNC_INCREMENT_ENTHUSIASM, incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchAPIData()]);
}
