import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "styles/theme";
import { StyledContainer } from "components/Container/Container.styled";

export const CharacterDetails = styled(StyledContainer)`
  padding-top: 23px;
  padding-bottom: 85px;

  ${theme.mq.desktop} {
    padding-top: 21px;
    padding-bottom: 142px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const ToolBar = styled("div")``;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: stretch;
  column-gap: 8px;

  font-family: ${(p) => p.theme.fonts.karla};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.17;
  color: #000000;
  text-transform: uppercase;
`;

export const DetailsContainer = styled("div")`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.mq.desktop} {
    margin-top: 25px;
  }
`;

export const ImageWrapper = styled("div")`
  margin-bottom: 30px;
  width: 160px;
  height: 160px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #f2f2f7;
  border-radius: 50%;

  ${theme.mq.desktop} {
    margin-bottom: 10px;
    width: 310px;
    height: 310px;
  }
`;

export const Image = styled("img")`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Name = styled("h1")`
  margin-bottom: 35px;
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.xxl};
  line-height: 1.19;
  color: ${(p) => p.theme.colors.mainText};

  ${theme.mq.desktop} {
    margin-bottom: 48px;
    font-size: 48px;
  }
`;

export const Title = styled("h2")`
  margin-bottom: 16px;
  align-self: flex-start;

  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: #8e8e93;

  ${theme.mq.desktop} {
    margin-bottom: 48px;
    align-self: center;
  }
`;

export const ListWrapper = styled("div")`
  width: 100%;

  ${theme.mq.desktop} {
    width: 413px;
  }
`;
