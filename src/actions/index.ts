import {
  ASYNC_INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  INCREMENT_ENTHUSIASM,
  RECEIVE_API_DATA,
  REQUEST_API_DATA
} from "../constants/index";

export interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export interface IncrementAsync {
  type: ASYNC_INCREMENT_ENTHUSIASM;
}

export interface RequestAPIData {
  type: REQUEST_API_DATA;
}

export const requestApiData = (): RequestAPIData => ({
  type: REQUEST_API_DATA
});

export const receiveApiData = (data: RECEIVE_API_DATA) => ({
  type: RECEIVE_API_DATA,
  data
});

export type EnthusiasmAction =
  | IncrementEnthusiasm
  | DecrementEnthusiasm
  | IncrementAsync
  | RequestAPIData;

export const incrementEnthusiasm = (): IncrementEnthusiasm => ({
  type: INCREMENT_ENTHUSIASM
});

export const decrementEnthusiasm = (): DecrementEnthusiasm => ({
  type: DECREMENT_ENTHUSIASM
});

export const asyncIncrement = (): IncrementAsync => ({
  type: ASYNC_INCREMENT_ENTHUSIASM
});
