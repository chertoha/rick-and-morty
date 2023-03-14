import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledError = styled("div")`
  padding-top: 50px;
`;

export const Title = styled("h1")`
  margin-bottom: 30px;
  font-size: ${(p) => p.theme.fontSizes.xl};
  text-align: center;

  ${theme.mq.desktop} {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }
`;

export const Text = styled("p")`
  margin-bottom: 20px;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.l};

  ${theme.mq.desktop} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;
