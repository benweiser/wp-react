import * as React from "react";
import Hello from "../containers/Hello";

const Tests: React.SFC<{}> = (): JSX.Element => {
  return (
    <div>
      <Hello />
      Hello theressss. This is some content.{" "}
    </div>
  );
};

export default Tests;
