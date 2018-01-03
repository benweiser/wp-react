import * as React from "react";

export interface HelloProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({
  name,
  enthusiasmLevel = 0,
  onIncrement,
  onDecrement
}: HelloProps): JSX.Element => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic");
  }
  // const onIncrement1 = () => { onIncrement(); };
  return (
    <div className="hello">
      <div className="greeting">
        This is your {name}
        Hello {name + getExclamationMarks(enthusiasmLevel)}
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Hello;

const getExclamationMarks = (numChars: number): string => {
  return Array(numChars + 1).join("!");
};
