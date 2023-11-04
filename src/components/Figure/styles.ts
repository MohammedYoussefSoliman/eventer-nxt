import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledFigure = styled("figure")`
  label: figure;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  overflow: hidden;
  ${({ theme }) => css`
    background-color: ${theme.colors.pallet[400]};
  `}
  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default StyledFigure;
