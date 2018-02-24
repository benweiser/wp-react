import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../action-types/index";
import { PostItem } from "../../lib/interfaces/PostItem";
import { APIConstants } from "../../lib/APIConstants";

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
  method: string = "get",
  query: string = APIConstants.POSTS
): RequestAPIData => ({
  type: REQUEST_API_DATA,
  method,
  query
});

export const receiveAPIData = (data: ReceiveAPIData) => ({
  type: RECEIVE_API_DATA,
  payload: data
});

export type PostsAction = RequestAPIData | ReceiveAPIData;
