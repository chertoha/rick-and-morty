import styled from "styled-components";
import { theme } from "utils/theme";

export const StyledContainer = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  /* outline: 1px solid green; */
  background-color: ${(p) => p.theme.colors.mainBackground};

  width: ${(p) => p.theme.breakpoints.mobile}px;

  ${theme.mq.desktop} {
    width: ${(p) => p.theme.breakpoints.desktop}px;
    padding-left: 210px;
    padding-right: 210px;
  }
`;
