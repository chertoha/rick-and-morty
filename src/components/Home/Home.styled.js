import styled from "styled-components";
import { theme } from "styles/theme";

export const HomeWrapper = styled("div")`
  padding-top: 92px;
  padding-bottom: 223px;

  ${theme.mq.desktop} {
    padding-top: 86px;
    padding-bottom: 188px;
  }
`;
