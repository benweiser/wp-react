import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation: React.SFC<{}> = (): JSX.Element => {
  return (
      <StyledNavigation>
        <Link to="/test">Test</Link>
        <Link to="/blog">Blog</Link>
      </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  a {
    padding: 16px;
  }
`;

export default Navigation;
