import {
  DECREMENT_ENTHUSIASM,
  INCREMENT_ENTHUSIASM
} from "../action-creators/index";
import { EnthusiasmAction } from "../actions/index";
import { EnthusiasmState } from "../stores/EnthusiasmState";
import { PostsReducer } from "./PostsReducer";

export const enthusiasmReducer = (
  state: EnthusiasmState = { languageName: "Typescript", enthusiasmLevel: 2 },
  action: EnthusiasmAction
): EnthusiasmState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
    default:
      return state;
  }
};

export const rootReducer = {
  enthusiasmReducer,
  PostsReducer
};
