import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@/components/Buttons";
import { Flex } from "../Grids";

type StepButtonType = {
  active?: boolean;
};

export const Wrapper = styled(Flex)`
  label: pagination-wrapper;
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.pallet[300]};
    .next--button,
    .prev--button {
      border: none;
      background-color: ${colors.pallet[800]};
      &:hover {
        background-color: ${colors.pallet[700]};
      }
    }
  `}
`;

export const DotButton = styled(Button)<StepButtonType>`
  min-width: unset;
  z-index: 2;
  ${({ theme, active }) => css`
    color: ${active ? theme.colors.pallet[0] : theme.colors.pallet[100]};
    border-bottom: none;
    border-top: none;
    background-color: ${theme.colors.pallet[800]};
    &:hover {
      background-color: ${theme.colors.pallet[700]};
    }
  `}
`;
