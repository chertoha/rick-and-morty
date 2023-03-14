import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "utils/theme";

export const ImageWrapper = styled(Link)`
  display: flex;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  ${theme.mq.desktop} {
    width: 600px;
    margin-bottom: 16px;
  }
`;

export const Image = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
`;
