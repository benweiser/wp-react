import { rootReducer } from "./redux/reducers/index";
import { renderApp, store } from "./index";

/**
 * Any functions that should not run in the production build go here
 */
export const developmentScripts = () => {
  if (process.env.NODE_ENV !== "production") {
    const registerObserver = require("react-perf-devtool");
    registerObserver();

    if (module.hot) {
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
