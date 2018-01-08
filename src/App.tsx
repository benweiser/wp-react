import * as React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import BlogPage from "./containers/BlogPage";
import Tests from "./components/Tests";
import Header from "./containers/Header";
import "typeface-roboto";
import styled from "styled-components";
import Logo from "./components/Logo";
import FourOhFour from "./components/404";

interface AppProps {
  className?: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Header />
        <main>
          <Switch>
          <Route exact={true} path="/" component={Logo} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/test" component={Tests} />
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
