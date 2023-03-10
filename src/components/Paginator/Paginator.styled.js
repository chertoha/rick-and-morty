import styled, { css } from "styled-components";

export const PagList = styled("ul")`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 3px;
  /* column-gap: 10px; */
`;

export const PagItem = styled("li")`
  width: 40px;
  height: 40px;
`;

export const PagButton = styled("button")`
  cursor: pointer;
  width: 100%;
  height: 100%;

  font-size: 13px;

  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  border: none;
  background-color: transparent;

  ${({ type }) => {
    switch (type) {
      case "arrow":
        return css`
          background-color: #f7f7f7;
        `;

      case "current":
        return css`
          flex-shrink: 0;
          border: 1px solid #000000;
        `;

      default:
        break;
    }
  }}

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
