import styled from "styled-components";
import { theme } from "utils/theme";

export const List = styled("ul")`
  ${theme.mq.desktop} {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
  }
`;

export const Item = styled("li")`
  margin-bottom: 32px;
  flex-basis: 100%;
  overflow: hidden;

  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  box-shadow: ${(p) => p.theme.shadows.boxShadow};

  ${theme.mq.desktop} {
    margin-bottom: 0;
    flex-basis: calc((100% - 60px) / 4);
  }

  &:last-child {
    margin-bottom: 0;
  }

  transition: transform 250ms ease-in;

  &:hover,
  &:focus-within {
    transform: scale(1.02);
  }
`;
