import * as React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import styled from "styled-components";

// import styled from "styled-components";

class Header extends React.Component {
  render() {
    return (
        <StyledHeader>
          <Logo/>
          <Navigation/>
        </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
> * {
//float: left;
}
`;

export default Header;