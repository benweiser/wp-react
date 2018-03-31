import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;

  a {
    padding: 16px;
    font-size: 18px;
    text-decoration: none;
    color: #eeeaaa;

    :hover {
      color: #fff;
    }
  }
`;

const Navigation: React.SFC<{}> = (): JSX.Element => {
  return (
    <StyledNavigation>
      <Link to="/test">Test</Link>
      <Link to="/blog">Blog</Link>
    </StyledNavigation>
  );
};

export default Navigation;
