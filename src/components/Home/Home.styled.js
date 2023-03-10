import styled from "styled-components";
import { theme } from "utils/theme";

export const HomeWrapper = styled("div")`
  padding-top: 92px;
  padding-bottom: 223px;

  ${theme.mq.desktop} {
    padding-top: 86px;
    padding-bottom: 188px;
  }
`;

export const PagWrapper = styled("div")`
  margin-top: 100px;
`;
