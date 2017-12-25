import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Hello from "./components/Hello";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Hello name="TypeScript" enthusiasmLevel={10}/>
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();
