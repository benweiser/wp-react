import { ThemeInterface } from "../../../styles/theme";
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "../../../styles/theme";

interface NavItemProps {
  className?: string;
  theme?: ThemeInterface;
  path: any;
  linkText: string;
  children?: React.ReactChild;
}

export const NavItem: React.StatelessComponent<NavItemProps> = ({
  className,
  path,
  linkText,
  children
}: NavItemProps) => (
  <Link to={path} className={className}>
    {linkText}
  </Link>
);

export const StyledNavItem = styled(Link)`
  a {
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    text-decoration: none;
    :hover,
    :focus {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
