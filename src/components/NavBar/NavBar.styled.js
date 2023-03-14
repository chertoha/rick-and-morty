import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "utils/theme";

export const Nav = styled("nav")``;

export const List = styled("ul")`
  display: flex;
  column-gap: 20px;
`;

export const Item = styled("li")``;

export const StyledLink = styled(NavLink)`
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.5);

  ${theme.mq.desktop} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }

  transition: color ${(p) => p.theme.transitions.default};
  &:hover {
    color: #424ab3;
  }

  &.active {
    font-weight: ${(p) => p.theme.fontWeights.bold};
    color: #424ab3;
  }
  /* 
  ${(p) =>
    p.isHidden &&
    css`
      display: none;
    `} */
`;
