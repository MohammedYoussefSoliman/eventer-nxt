import { css } from "@emotion/react";
import styled from "@emotion/styled";
import devices from "@/theme/sizes";
import { Flex } from "../Grids";

type StepButtonType = {
  active?: boolean;
};

export const Wrapper = styled(Flex)`
  label: pagination-wrapper;
  .navigation--button {
    ${({ theme }) => css`
      background-color: ${theme.colors.pallet[400]};
    `}
    &:disabled {
      ${({ theme }) => css`
        background-color: ${theme.colors.pallet[100]};
      `}
    }
  }
`;

export const DotButton = styled("button")<StepButtonType>`
  label: step-button;
  all: unset;
  height: 32px;
  width: 32px;
  border-radius: 50px;
  font-size: 12px;
  font-family: inherit;
  font-weight: 600;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  z-index: 2;
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.pallet[500] : theme.colors.pallet[400]};
    background-color: ${active
      ? theme.colors.pallet[100]
      : theme.colors.pallet[500]};
    &:hover {
      background-color: ${active
        ? theme.colors.pallet[50]
        : theme.colors.pallet[400]};
    }
    border: 2px solid ${theme.colors.pallet[0]};
  `}

  ${devices.sm} {
    font-size: 14px;
  }
  ${devices.md} {
    font-size: 18px;
    height: 45px;
    width: 45px;
    border-width: 3px;
  }
`;
