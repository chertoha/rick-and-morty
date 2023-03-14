import styled, { css } from "styled-components";
import { theme } from "utils/theme";

export const DropDownWrapper = styled("div")`
  position: relative;
`;

export const IconWrapper = styled("div")`
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: #424ab3;
`;

export const TitleWrapper = styled("div")`
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const Title = styled("span")`
  font-size: ${(p) => p.theme.fontSizes.l};

  transition: color ${(p) => p.theme.transitions.default};
`;

export const DropDownList = styled("ul")`
  position: absolute;
  top: 100%;
  right: 0;

  background-color: #fcfcfc;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${(p) => p.theme.radii.borderRadius.small};

  ${theme.mq.upToDesktop} {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DropDownItem = styled("li")`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  /* width: 100%; */

  color: rgba(0, 0, 0, 0.5);

  ${(p) =>
    p.link &&
    css`
      cursor: pointer;
      color: rgba(0, 0, 0, 1);
      &:hover {
        background-color: #cfcfcf;
        color: #ffffff;
      }
    `}

  font-size: ${(p) => p.theme.fontSizes.l};

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;
