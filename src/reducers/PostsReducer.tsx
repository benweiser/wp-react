import { RECEIVE_API_DATA, REQUEST_API_DATA } from "../constants/index";
import { PostsState } from "../stores/PostsState";
import { PostsAction } from "../actions/PostsActions";

export const PostsReducer = (
  state: PostsState = { posts: {}, isFetching: false },
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return { ...state, isFetching: true };
    case RECEIVE_API_DATA:
      return { ...state, posts: action.data, isFetching: false };
    default:
      return state;
  }
};
