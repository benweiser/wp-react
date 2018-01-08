import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { default as StyledApp } from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers/index";
import { Provider } from "react-redux";
import storage from "redux-persist/es/storage";
import { persistCombineReducers, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { createLogger } from "redux-logger";
import { PersistConfig } from "redux-persist/es/types";
import { RootStoreState } from "./stores/RootStoreState";
import { composeWithDevTools } from "redux-devtools-extension";

if (process.env.NODE_ENV !== "production") {
  const registerObserver = require("react-perf-devtool");
  registerObserver();
}

/*
export const store = createStore<RootState>(
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

export const initialState: RootStoreState = {
  enthusiasmReducer: {
    enthusiasmLevel: 2,
    languageName: "Java"
  }
};

const config: PersistConfig = {
  key: "primary",
  storage
};

const reducer = persistCombineReducers(config, rootReducer);

const configureStore = () => {
  const store = createStore(
    reducer,
    undefined,
    // initialState,
    composeWithDevTools(compose(middleware))
  );
  const persistor = persistStore(store);
  return { persistor, store };
};

// console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

const store = configureStore().store;
const persistor = configureStore().persistor;

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <StyledApp />
      </BrowserRouter>
    </Provider>
  </PersistGate>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();

// unsubscribe();
