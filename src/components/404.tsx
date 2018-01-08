import * as React from "react";

export interface Four04Props {
  location: string;
}

const FourOhFour: React.SFC<Four04Props> = (): JSX.Element => {
  return (
    <div>
      <h1>This page could not be found. No match for {location.pathname}</h1>
    </div>
  );
};

export default FourOhFour;
