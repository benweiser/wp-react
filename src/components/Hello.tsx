import * as React from "react";
import styled from "styled-components";

export interface HelloProps {
  readonly languageName: string;
  readonly enthusiasmLevel?: number;
  readonly onIncrement?: () => void;
  readonly onDecrement?: () => void;
  readonly onIncrementAsync?: () => void;
}

const StyledButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  width: 120px;
`;

const getExclamationMarks = (numChars: number): string => {
  return Array(numChars + 1).join("!");
};

const Hello = ({
  languageName,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement,
  onIncrementAsync
}: HelloProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic");
  }

  return (
    <div className="hello">
      <div>
        <StyledButton onClick={onDecrement}>-</StyledButton>
        <StyledButton onClick={onIncrement}>+</StyledButton>
        <StyledButton onClick={onIncrementAsync}>Async Action</StyledButton>
      </div>
      <h2 className="greeting">
        Hello {languageName + getExclamationMarks(enthusiasmLevel)}
      </h2>
    </div>
  );
};

export default Hello;
