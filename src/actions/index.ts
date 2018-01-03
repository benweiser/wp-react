import * as constants from "../constants";

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export const incrementEnthusiasm = (): IncrementEnthusiasm => {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
};

export const decrementEnthusiasm = (): DecrementEnthusiasm => {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
};
