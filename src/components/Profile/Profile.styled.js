import { StyledContainer } from "components/Container/Container.styled";
import styled from "styled-components";

export const ProfileContainer = styled(StyledContainer)`
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

  /* outline: 1px solid red; */
`;

export const Wrapper = styled("div")`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ProfileBar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled("button")`
  cursor: pointer;
  padding: 8px 15px;
  margin: 0;
  /* border: 1px solid grey; */
  border: none;
  border-radius: 4px;
  background-color: #424ab3;
  color: #ffffff;
  font-size: 18px;
`;

export const Name = styled("p")`
  font-size: 18px;
  margin-right: 15px;
`;
