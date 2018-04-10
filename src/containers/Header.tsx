import * as React from "react";
import Logo from "../components/Logo/Logo";
import StyledNavigation from "../components/Navigation";
import styled from "../styles/theme";
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
          <StyledNavigation display="flex" alignItems="center" />
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
