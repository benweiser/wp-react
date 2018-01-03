import * as React from "react";
import Hello from "./Hello";

const Tests: React.SFC<{}> = (): JSX.Element => {
  return (
    <div>
      <Hello name={"Typescript"} enthusiasmLevel={3} />
      Hello there. This is some content.{" "}
    </div>
  );
};

export default Tests;
