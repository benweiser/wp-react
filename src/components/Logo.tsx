import * as React from "react";
import styled from "styled-components";

const logo = require("../assets/images/logo.png");

const Logo: React.SFC<{}> = (): JSX.Element => {
  return (
    <div>
      <StyledImage src={logo} alt="My Logo" />
      <span>Ben Weiser</span>
    </div>
  );
};

const StyledImage = styled.img`
  border-radius: 100px;
  max-width: 75px;
  padding: 4px;
  border: 1px solid #ccc;
`;

export default Logo;
