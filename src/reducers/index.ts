import { StoreState } from "../@types/redux-store/index";
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "../constants/index";
import { EnthusiasmAction } from "../actions/index";

export const enthusiasm = (
  state: StoreState,
  action: EnthusiasmAction
): StoreState => {
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
