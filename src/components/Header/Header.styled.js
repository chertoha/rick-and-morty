import { StyledContainer } from "components/Container/Container.styled";
import styled from "styled-components";

export const HeaderContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: linear-gradient(
    45deg,
    #d6d2d2 3.33%,
    #ffffff 3.33%,
    #ffffff 50%,
    #d6d2d2 50%,
    #d6d2d2 53.33%,
    #ffffff 53.33%,
    #ffffff 100%
  );
  background-size: 15px 15px;
  border-bottom: 1px solid #d6d2d2;
`;
