import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledContainer = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${(p) => p.theme.colors.mainBackground};

  max-width: ${(p) => p.theme.breakpoints.mobile}px;

  ${theme.mq.desktop} {
    max-width: ${(p) => p.theme.breakpoints.desktop}px;
    padding-left: 210px;
    padding-right: 210px;
  }
`;
