import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled("ul")`
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
`;

export const Item = styled("li")``;

export const StyledLink = styled(Link)`
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  color: rgba(0, 0, 0, 0.3);

  transition: color ${(p) => p.theme.transitions.default};

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const PagWrapper = styled("div")`
  margin-top: 100px;
`;
