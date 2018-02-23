import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../action-types/index";
import { PostItem } from "../../lib/interfaces/PostItem";

export interface RequestAPIData {
  type: REQUEST_API_DATA;
  query: string;
  method: string;
}

export interface ReceiveAPIData {
  type: RECEIVE_API_DATA;
  payload: PostItem;
}

export const requestAPIData = (
  query: string,
  method: string
): RequestAPIData => ({
  type: REQUEST_API_DATA,
  query,
  method
});

export const receiveAPIData = (data: ReceiveAPIData) => ({
  type: RECEIVE_API_DATA,
  payload: data
});

export type PostsAction = RequestAPIData | ReceiveAPIData;
