import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { default as StyledApp } from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers/index";
import { Provider } from "react-redux";
import * as localForage from "localforage";
import { persistCombineReducers, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { createLogger } from "redux-logger";
import { PersistConfig } from "redux-persist/es/types";
import { RootStoreState } from "./stores/RootStoreState";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import { default as rootSaga } from "./sagas/index";

if (process.env.NODE_ENV !== "production") {
  const registerObserver = require("react-perf-devtool");
  registerObserver();
}

export const initialState: RootStoreState = {
  enthusiasmReducer: {
    enthusiasmLevel: 2,
    languageName: "Java"
  }
};

const config: PersistConfig = {
  key: "primary",
  storage: localForage
};

const reducer = persistCombineReducers(config, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, createLogger());

const store = createStore(
  reducer,
  undefined,
  // initialState,
  composeWithDevTools(compose(middleware))
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <StyledApp />
    </Provider>
  </PersistGate>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
