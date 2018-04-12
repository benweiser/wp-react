import * as localForage from "localforage";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import createSagaMiddleware from "redux-saga";
import registerServiceWorker from "./registerServiceWorker";
import { default as StyledApp } from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./redux/reducers/";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import { persistCombineReducers, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { PersistConfig } from "redux-persist/es/types";
import { Provider } from "react-redux";
import { RootStoreState } from "./redux/stores/RootStoreState";
import { default as rootSaga } from "./redux/sagas/index";
import baseStyles from "./styles/global/index";

/**
 * The initial state of all stores in the root reducer
 */
export const initialState: RootStoreState = {
  PostsReducer: {
    isFetching: false,
    payload: undefined
  },
  enthusiasmReducer: {
    enthusiasmLevel: 2,
    languageName: "Java"
  }
};

/**
 * Redux persist configuration
 */
const config: PersistConfig = {
  key: "primary",
  storage: localForage
};

/**
 * A wrapper around combineReducers that combines our root reducer into a persistent state
 * @type {Reducer<any & "redux-persist/es/types".PersistedState>}
 */
const reducer = persistCombineReducers(config, rootReducer);

/**
 * Creates the saga middleware needed to inform redux of our sagas
 * @type {SagaMiddleware<Object>}
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Apply the middleware to make it available to our redux store
 * @type {GenericStoreEnhancer}
 */
const middleware = applyMiddleware(sagaMiddleware, createLogger());

export const store = createStore(
  reducer,
  undefined,
  // initialState,
  composeWithDevTools(compose(middleware))
);
/**
 * Create a persistent store
 * @type {"redux-persist/es/types".Persistor}
 */
const persistentStore = persistStore(store);

/**
 * Run our saga middleware on the root saga
 */
sagaMiddleware.run(rootSaga);

export const developmentScripts = () => {
  if (process.env.NODE_ENV !== "production") {
    console.log("This is the development environment");
    const a11y = require("react-a11y").default;
    const registerObserver = require("react-perf-devtool");

    a11y(React, ReactDOM, {
      rules: {
        "avoid-positive-tabindex": "warn",
        "hidden-uses-tabindex": "warn",
        "img-uses-alt": "warn",
        "mouse-events-map-to-key-events": "warn",
        "no-unsupported-elements-use-aria": "warn",
        "onclick-uses-tabindex": "warn",
        "redundant-alt": ["warn", ["image"]],
        "label-uses-for": "warn",
        "tabindex-uses-button": "warn",
        "valid-aria-role": "warn"
      }
    });

    registerObserver();

    if (module.hot) {
      console.log("Hot module reloading supported");
      module.hot.accept("./redux/reducers/", () => {
        // tslint:disable-next-line
        store.replaceReducer(rootReducer as any);
      });
    }

    /**
     * Allow for hot module replacement
     */
    if (module.hot) {
      module.hot.accept("./App", () => {
        renderApp();
      });
    }
  }
};

developmentScripts();
/**
 * Returns our entire application
 * @returns {Element}
 */
export const renderApp = () => {
  baseStyles();
  return ReactDOM.render(
    <PersistGate persistor={persistentStore}>
      <Provider store={store}>
        <StyledApp />
      </Provider>
    </PersistGate>,
    document.getElementById("root") as HTMLElement
  );
};

/**
 * Render our application
 */
renderApp();
/**
 * Register our service workers
 */
registerServiceWorker();
