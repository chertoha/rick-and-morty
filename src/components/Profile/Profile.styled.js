import styled from "styled-components";

export const ProfileWrapper = styled("div")`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ProfileBar = styled("div")`
  display: flex;
  align-items: center;
`;

export const Button = styled("button")`
  cursor: pointer;
  padding: 8px 15px;
  margin: 0;

  font-size: ${(p) => p.theme.fontSizes.m};
  color: #ffffff;

  border: none;
  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  background-color: #424ab3;
`;

export const Name = styled("p")`
  font-size: ${(p) => p.theme.fontSizes.m};
  margin-right: 15px;
`;
