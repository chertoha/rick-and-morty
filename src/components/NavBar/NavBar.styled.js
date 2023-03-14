import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.5);

  transition: color ${(p) => p.theme.transitions.default};
  &:hover {
    color: #424ab3;
  }
`;
