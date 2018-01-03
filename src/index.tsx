import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { default as StyledApp } from "./App";
import { createStore, StoreEnhancer } from "redux";
import { StoreState } from "./@types/redux-store/index";
import { enthusiasm } from "./reducers/index";
import { Provider } from "react-redux";

const registerObserver = require("react-perf-devtool");
registerObserver();

export interface CustomWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<StoreState>;
}

export const store = createStore<StoreState>(enthusiasm, {
      enthusiasmLevel: 1,
      languageName: "TypeScript",
    },
    (window as CustomWindow).__REDUX_DEVTOOLS_EXTENSION__ && (window as CustomWindow).__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <StyledApp/>
    </BrowserRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();
