import { EnthusiasmState } from "./EnthusiasmState";
import { PersistState } from "redux-persist/es/types";

export type RootStoreState = {
  readonly enthusiasmReducer: EnthusiasmState;
  readonly _persist?: PersistState;
};
