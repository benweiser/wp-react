import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "../constants/index";
import { EnthusiasmAction } from "../actions/index";
import { EnthusiasmState } from "../stores/EnthusiasmState";

export const PostsReducer = (
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
