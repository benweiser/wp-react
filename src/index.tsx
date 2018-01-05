import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { default as StyledApp } from "./App";
import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import { StoreState } from "./@types/redux-store/index";
import { rootReducer } from "./reducers/index";
import { Provider } from "react-redux";
import storage from "redux-persist/es/storage";
import { persistCombineReducers, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { createLogger } from "redux-logger";
import { PersistConfig } from "redux-persist/es/types";

const registerObserver = require("react-perf-devtool");
registerObserver();

export interface CustomWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<StoreState>;
}

/*
export const store = createStore<StoreState>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: "TypeScript"
  },
  (window as CustomWindow).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as CustomWindow).__REDUX_DEVTOOLS_EXTENSION__()
);
*/

const middleware = applyMiddleware(createLogger());

export const initialState: StoreState = {
  enthusiasmLevel: 2,
  languageName: "Java"
};

const config: PersistConfig = {
  key: "primary",
  storage
};

const reducer = persistCombineReducers(config, rootReducer);

const store = createStore(
    // reducer
    reducer,
    initialState as any,
    compose(middleware)
);

const persistor = persistStore(store);

console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <StyledApp/>
        </BrowserRouter>
      </Provider>
    </PersistGate>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();

unsubscribe();