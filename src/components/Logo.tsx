import * as React from "react";
import styled from "styled-components";

const logo = require("../images/logo.png");

const Logo: React.SFC<{}> = (): JSX.Element => {
  return (
      <Image src={logo} alt="My Logo"/>
  );
};

const Image = styled.img`
    border-radius: 100px;
    padding: 4px;
    border: 1px solid #ccc;
`;

export default Logo;