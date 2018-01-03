import Hello from "../components/Hello";
import { connect, Dispatch } from "react-redux";
import * as actions from "../actions/";
import { StoreState } from "../@types/redux-store/index";
import { bindActionCreators } from "redux";

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  const boundActionCreators = bindActionCreators(
    actions.decrementEnthusiasm,
    dispatch
  );
  console.log(boundActionCreators);
  const allActionProps = { ...boundActionCreators, dispatch };
  return allActionProps;
};

/*export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}*/

export default connect(mapStateToProps, mapDispatchToProps)(Hello as any);
