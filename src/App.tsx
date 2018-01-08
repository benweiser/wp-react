import * as React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Header from "./containers/Header";
import "typeface-roboto";
import styled from "styled-components";
import Logo from "./components/Logo";
import FourOhFour from "./components/404";
import asyncComponent from "./components/AsyncComponent";

interface AppProps {
  className?: string;
}

const AsyncBlogPage = asyncComponent(() => import("./containers/BlogPage"));
const AsyncTests = asyncComponent(() => import("./components/Tests"));

class App extends React.Component<AppProps, {}> {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Header />
        <main>
          <Switch>
            <Route exact={true} path="/" component={Logo} />
            <Route path="/blog" component={AsyncBlogPage} />
            <Route path="/test" component={AsyncTests} />
            <Route component={FourOhFour} />
          </Switch>
        </main>
      </div>
    );
  }
}

const StyledApp = styled(App)`
  font-family: "Roboto", sans-serif;
`;

export default StyledApp;
