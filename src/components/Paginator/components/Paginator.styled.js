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
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;

  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  border: none;
  background-color: transparent;

  ${({ type }) => {
    switch (type) {
      case "arrow":
        return css`
          border: 1px solid rgba(0, 0, 0, 0.2);
        `;

      case "current":
        return css`
          flex-shrink: 0;
          border: 1px solid rgba(0, 0, 0, 0.2);
        `;

      default:
        break;
    }
  }}

  transition: background-color ${(p) => p.theme.transitions.default};
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;
