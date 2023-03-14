import { StyledContainer } from "components/Container/Container.styled";
import styled from "styled-components";
import { theme } from "styles/theme";

export const LocationsContainer = styled(StyledContainer)`
  padding-top: 30px;
  padding-bottom: 30px;

  ${theme.mq.desktop} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const List = styled("ul")``;

export const Item = styled("li")`
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${theme.mq.desktop} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Name = styled("h2")`
  text-align: center;
  margin-bottom: 20px;
`;

export const Info = styled("p")`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: ${(p) => p.theme.fontSizes.xl};
`;

export const PagWrapper = styled("div")`
  margin-top: 100px;
`;
