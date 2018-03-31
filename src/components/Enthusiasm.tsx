import * as React from "react";

export interface EnthusiasmProps {
  readonly onIncrement?: () => void;
  readonly onDecrement?: () => void;
}

const Enthusiasm: React.SFC<EnthusiasmProps> = ({
  onDecrement,
  onIncrement
}): JSX.Element => {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Enthusiasm;
