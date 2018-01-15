import Hello from "../components/Hello";
import { connect, Dispatch } from "react-redux";
import {
  incrementEnthusiasm, decrementEnthusiasm, asyncIncrement, EnthusiasmAction,
  requestApiData
} from "../actions/";
import { RootStoreState } from "../stores/RootStoreState";

// Change the shape of the object when passing as prop
/*export function mapStateToProps({ enthusiasmReducer: { enthusiasmLevel, languageName } }: RootState) {
  return {
    enthusiasmReducer: {
      enthusiasmLevel,
      name: languageName
    }
  };
}*/

const mapStateToProps = (state: RootStoreState) => state.enthusiasmReducer;

const mapDispatchToProps = (dispatch: Dispatch<EnthusiasmAction>) => {
  return {
    onIncrement: () => dispatch(incrementEnthusiasm()),
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onIncrementAsync: () => dispatch(asyncIncrement()),
    requestApiData: () => dispatch(requestApiData())
  };
};

const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default HelloContainer;
