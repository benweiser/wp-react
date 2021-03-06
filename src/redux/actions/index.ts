import {
  ASYNC_INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  INCREMENT_ENTHUSIASM
} from "../action-types/index";

export interface IncrementEnthusiasm {
  readonly type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  readonly type: DECREMENT_ENTHUSIASM;
}

export interface IncrementAsync {
  readonly type: ASYNC_INCREMENT_ENTHUSIASM;
}

export type EnthusiasmAction =
  | IncrementEnthusiasm
  | DecrementEnthusiasm
  | IncrementAsync;

export const incrementEnthusiasm = (): IncrementEnthusiasm => ({
  type: INCREMENT_ENTHUSIASM
});

export const decrementEnthusiasm = (): DecrementEnthusiasm => ({
  type: DECREMENT_ENTHUSIASM
});

export const asyncIncrement = (): IncrementAsync => ({
  type: ASYNC_INCREMENT_ENTHUSIASM
});
