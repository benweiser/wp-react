import { EnthusiasmState } from "./EnthusiasmState";
import { PersistState } from "redux-persist/es/types";
import { PostsState } from "./PostsState";

export type RootStoreState = {
  readonly enthusiasmReducer: EnthusiasmState;
  readonly posts: PostsState;
  readonly _persist?: PersistState;
};
