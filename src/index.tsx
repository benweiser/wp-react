import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { default as StyledApp } from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./redux/reducers/";
import { Provider } from "react-redux";
import * as localForage from "localforage";
import { persistCombineReducers, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { createLogger } from "redux-logger";
import { PersistConfig } from "redux-persist/es/types";
import { RootStoreState } from "./redux/stores/RootStoreState";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import { default as rootSaga } from "./redux/sagas/index";

export const developmentScripts = () => {
  if (process.env.NODE_ENV !== "production") {
    console.log("This is the development environment");
    const registerObserver = require("react-perf-devtool");
    registerObserver();

    if (module.hot) {
      console.log("Hot module reloading supported");
      module.hot.accept("./redux/reducers/", () => {
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
 * The initial state of all stores in the root reducer
 * @type {{enthusiasmReducer: {enthusiasmLevel: number; languageName: string}; PostsReducer: {posts: any; isFetching: boolean}}}
 */
export const initialState: RootStoreState = {
  enthusiasmReducer: {
    enthusiasmLevel: 2,
    languageName: "Java"
  },
  PostsReducer: {
    posts: undefined,
    isFetching: false
  }
};

/**
 * Redux persist configuration
 * @type {{key: string; storage}}
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

/**
 * Returns our entire application
 * @returns {Element}
 */
export const renderApp = () => {
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
