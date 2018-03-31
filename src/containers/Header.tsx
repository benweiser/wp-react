import * as React from "react";
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #343434;
  padding: 8px;

  > div {
    display: grid;
    max-width: 1280px;
    margin: 0 auto;

    > * {
      grid-row: 1;
    }
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div>
          <Logo />
          <Navigation />
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
