import styled from "styled-components";

export const List = styled("ul")`
  padding-left: 16px;
  width: 100%;
`;

export const Item = styled("li")`
  padding-top: 9px;
  padding-bottom: 12px;

  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
`;

export const Key = styled("h3")`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: ${(p) => p.theme.colors.mainText};
`;

export const Value = styled("p")`
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.43;
  letter-spacing: 0.25px;

  color: ${(p) => p.theme.colors.secondaryText};
`;
