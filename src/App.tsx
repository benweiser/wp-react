import * as React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Header from "./containers/Header";
import "typeface-roboto";
import styled from "styled-components";
import Logo from "./components/Logo";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { BrowserRouter } from "react-router-dom";
// import * as Loadable from "react-loadable";
const Loadable = require("react-loadable");

interface AppProps {
  className?: string;
}

interface AsyncLoader {
  loader: () => Promise<{}>;
}

const LoadingComponent = (): JSX.Element => <div>Loading...</div>;

const AsyncComponent = (opts: AsyncLoader) => {
  return Loadable({
    loader: () => null,
    loading: () => <LoadingComponent />,
    delay: 200, // .2 secs
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
  loader: () => import("./containers/PostsPage")
});

class App extends React.Component<AppProps, {}> {
  render() {
    const { className } = this.props;
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

const StyledApp = styled(App)`
  font-family: "Roboto", sans-serif;
`;

export default StyledApp;
