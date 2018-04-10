import { Link } from "react-router-dom";
import { display, space } from "styled-system";
import styled from "../../../styles/theme";

export const StyledNavItem = styled(Link)`
  ${space};
  ${display};
  color: ${props => props.theme.colors.dark.text};
  text-decoration: none;
  :hover,
  :focus {
    color: ${props => props.theme.colors.primary};
  }
`;
