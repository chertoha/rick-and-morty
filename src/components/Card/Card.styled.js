import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "utils/theme";

export const CardLink = styled(Link)`
  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const ImageWrapper = styled("div")`
  /* height: 270px; */
  overflow: hidden;

  ${theme.mq.desktop} {
    /* height: 240px; */
    /* height: 168px; */
  }
`;

export const Meta = styled("div")`
  padding: 12px 16px;
  line-height: 1.5;
`;

export const Title = styled("h2")`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.l};
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Text = styled("p")`
  font-size: 14px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Image = styled("img")`
  display: block;
  width: 100%;
`;
