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
  margin-right: 8px;
`;

const StyledHello = styled.div`
  padding: 16px;
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
    <StyledHello>
      <div>
        <StyledButton onClick={onDecrement}>-</StyledButton>
        <StyledButton onClick={onIncrement}>+</StyledButton>
        <StyledButton onClick={onIncrementAsync}>Async Action</StyledButton>
      </div>
      <h2 className="greeting">
        Hello {languageName + getExclamationMarks(enthusiasmLevel)}
      </h2>
    </StyledHello>
  );
};

export default Hello;
