import Button from "material-ui/Button";
import * as React from "react";

const CETButton: React.SFC<{}> = (): JSX.Element => {
  return (
    <Button variant="raised" color="primary">
      Danger!
    </Button>
  );
};

export default CETButton;
