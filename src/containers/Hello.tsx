import Hello from "../components/Hello";
import { connect, Dispatch } from "react-redux";
import * as actions from "../actions/";
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

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
};

const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default HelloContainer;
