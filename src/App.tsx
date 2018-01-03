import * as React from "react";
import "./App.css";
import { Route } from "react-router";
import BlogPage from "./containers/BlogPage";
import Tests from "./components/Tests";
import Header from "./containers/Header";
import "typeface-roboto";
import styled from "styled-components";

interface AppProps {
  className?: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Header/>
        <main>
          <Route path="/blog" component={BlogPage} />
          <Route path="/test" component={Tests} />
        </main>
      </div>
    );
  }
}

const StyledApp = styled(App)`
font-family: "Roboto", sans-serif;
`;

export default StyledApp;
