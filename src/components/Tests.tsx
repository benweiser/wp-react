import { default as MyApper } from "./atoms/Toggle";
import * as React from "react";
import Hello from "../containers/Hello";

const Tests: React.SFC<{}> = (): JSX.Element => {
  return (
    <div>
      <Hello />
      Hello theressss. This is some content.
      <MyApper />
    </div>
  );
};

export default Tests;
