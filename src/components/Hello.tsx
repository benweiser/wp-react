import * as React from "react";

export interface HelloProps {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({
                 languageName,
                 enthusiasmLevel = 1,
                 onIncrement,
                 onDecrement
               }: HelloProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic");
  }

  return (
      <div className="hello">
        <div className="greeting">
          This is your {languageName}
          Hello {languageName + getExclamationMarks(enthusiasmLevel)}
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