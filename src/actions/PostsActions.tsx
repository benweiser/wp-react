import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../constants/index";

export interface RequestAPIData {
  type: REQUEST_API_DATA;
}

export interface ReceiveAPIData {
  type: RECEIVE_API_DATA;
  data: {};
}

export const requestAPIData = (): RequestAPIData => ({
  type: REQUEST_API_DATA
});

export const receiveAPIData = (data: RECEIVE_API_DATA) => ({
  type: RECEIVE_API_DATA,
  data
});

export type PostsAction = RequestAPIData | ReceiveAPIData;
