import { ROUTES } from "../Routes";
import styled from "../styles/styled-components";
import * as React from "react";

import { space, alignItems, display } from "styled-system";
import { StyledNavItem } from "./atoms/NavItem/StyledNavItem";

interface StyledNavProps {
  readonly className?: string;
}

const Navigation: React.StatelessComponent<StyledNavProps> = ({
  className
}: StyledNavProps) => {
  return (
    <nav className={className}>
      {ROUTES.map((route, index) => (
        <StyledNavItem
          p={3}
          display="block"
          alignItems="center"
          key={index}
          to={`/${route.path}`}
        >
          {route.name}
        </StyledNavItem>
      ))}
    </nav>
  );
};

const StyledNavigation = styled(Navigation)`
  ${space};
  ${display};
  ${alignItems};
`;

export default StyledNavigation;
