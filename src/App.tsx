import * as React from "react";
import "./App.css";
import { Route } from "react-router";
import BlogPage from "./containers/BlogPage";
import Tests from "./components/Tests";
import Header from "./containers/Header";
import "typeface-roboto";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

interface AppProps {
  className?: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    const {className} = this.props;
    return (
        <BrowserRouter>
          <div className={className}>
            <Header/>
            <main>
              <Route path="/blog" component={BlogPage}/>
              <Route path="/test" component={Tests}/>
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
