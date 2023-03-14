import styled from "styled-components";
import { theme } from "styles/theme";

export const SearchWrapper = styled("div")`
  position: relative;
  margin-bottom: 32px;

  ${theme.mq.desktop} {
    margin-bottom: 61px;
  }
`;
export const Input = styled("input")`
  width: 100%;
  padding: 16px 16px 16px 48px;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.5);

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: ${(p) => p.theme.radii.borderRadius.medium};

  &:focus,
  &:focus-visible {
    outline: 1px solid rgba(0, 0, 0, 0.8);
  }
`;

export const IconWrapper = styled("div")`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;

  color: rgba(0, 0, 0, 0.54);
`;

export const LoaderWrapper = styled("div")`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;
