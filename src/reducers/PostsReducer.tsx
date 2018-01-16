import { RECEIVE_API_DATA } from "../constants/index";
import { PostsState } from "../stores/PostsState";
import { PostsAction } from "../actions/PostsActions";

export const PostsReducer = (
  state: PostsState = { posts: {} },
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return { ...state, posts: action.data };
    default:
      return state;
  }
};
