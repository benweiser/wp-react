import * as React from "react";
import Logo from "./Logo";
import Header from "../containers/Header";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import PostsList from "../containers/PostsList";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello ({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiastic");
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <Logo/>
            <Header/>
            <nav>
                <Link to="/test">Test</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <div>
                <Route path="/blog" component={PostsList} />
                <Route path="/test" component={Header} />
            </div>
        </div>
    );
}

export default Hello;

function getExclamationMarks(numChars: number): string {
    return Array(numChars + 1).join("!");
}