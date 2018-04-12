import * as React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Header from "./containers/Header";
import "typeface-roboto";
import { ThemeProvider } from "styled-components";
import { default as styled } from "./styles/styled-components";
import Logo from "./components/Logo/Logo";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/theme";
// import * as Loadable from "react-loadable";
const Loadable = require("react-loadable");

export interface ThemeInterface {
  readonly colors: {
    readonly blue: string;
    readonly text: string;
  };
}

interface AppProps {
  readonly className?: string;
  readonly theme?: ThemeInterface;
}

interface AsyncLoader {
  readonly loader: () => Promise<{}>;
}

const LoadingComponent = (): JSX.Element => <div>Loading...</div>;

const AsyncComponent = (opts: AsyncLoader) => {
  return Loadable({
    delay: 200, // .2 secs
    loader: () => null,
    loading: () => <LoadingComponent />,
    timeout: 10000, // 10 secs
    ...opts
  });
};

/*const AsyncBlogPage = AsyncComponent({
  loader: () => import("./containers/BlogPage/BlogPage")
});*/

const AsyncTests = AsyncComponent({
  loader: () => import("./components/Tests")
});

const AsyncPostsPage = AsyncComponent({
  loader: () => import("./containers/PostsPage/PostsPage")
});

class App extends React.Component<AppProps, {}> {
  public render() {
    const { className } = this.props;
    console.log("theme", theme);
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className={className}>
            <Header />
            <main>
              <Switch>
                <Route exact={true} path="/" component={Logo} />
                <Route path="/blog" component={AsyncPostsPage} />
                <Route path="/test" component={AsyncTests} />
                <Route component={NotFoundPage} />
              </Switch>
            </main>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

const StyledApp = styled(App)`
  font-family: "Roboto", sans-serif;
`;

export default StyledApp;
