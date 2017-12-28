import * as React from "react";
import "./App.css";
import Header from "./containers/Header";
import { Route } from "react-router";
import BlogPage from "./containers/BlogPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <Route path="/blog" component={BlogPage} />
          <Route path="/test" component={Header} />
        </div>
      </div>
    );
  }
}

export default App;
