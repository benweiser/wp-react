import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../action-types/index";
import { PostsState } from "../stores/PostsState";
import { PostsAction } from "../actions/PostsActions";

export const PostsReducer = (
  state: PostsState = { payload: {}, isFetching: false },
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return { ...state, isFetching: true };
    case RECEIVE_API_DATA:
      return { ...state, payload: action.payload, isFetching: false };
    default:
      return state;
  }
};
