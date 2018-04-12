import styled from "../styles/styled-components";
import * as React from "react";

import { space, alignItems, display } from "styled-system";
import { StyledNavItem } from "./atoms/NavItem/StyledNavItem";

interface StyledNavProps {
  className?: string;
}

const Navigation: React.StatelessComponent<StyledNavProps> = ({
  className
}: StyledNavProps) => (
  <nav className={className}>
    <StyledNavItem p={3} display="block" to="/test">
      Test
    </StyledNavItem>
    <StyledNavItem p={3} display="block" to="/blog">
      Blog
    </StyledNavItem>
    <StyledNavItem p={3} display="block" to="/blog">
      Blog
    </StyledNavItem>
  </nav>
);

const StyledNavigation = styled(Navigation)`
  ${space};
  ${display};
  ${alignItems};
`;

export default StyledNavigation;
