import { PostsReducer } from "./PostsReducer";
import { PostsAction, ReceiveAPIData } from "../actions/PostsActions";
import { PostsState } from "../stores/PostsState";
import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../action-types/index";
import { PostItem } from "../../lib/interfaces/PostItem";

it("should return the initial state", () => {
  expect(PostsReducer(undefined, {} as PostsAction)).toEqual({
    payload: {},
    isFetching: false
  });
});

it("should handle REQUEST_API_DATA", () => {
  expect(PostsReducer({} as PostsState, { type: REQUEST_API_DATA })).toEqual({
    isFetching: true
  });
});

it("should handle RECEIVE_API_DATA", () => {
  const action: ReceiveAPIData = {
    type: RECEIVE_API_DATA,
    data: {} as PostItem
  };
  expect(
    PostsReducer({} as PostsState, { type: RECEIVE_API_DATA, data: action.data })
  ).toEqual({
    payload: action.data,
    isFetching: false
  });
});
