import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "@/components/Grids";

type SelectWrapper = {
  error?: boolean;
};

export const Wrapper = styled(Flex)<SelectWrapper>`
  position: relative;
  height: 50px;
`;

export const Heading = styled(Flex)<SelectWrapper>`
  ${({ theme: { colors }, error }) => css`
    width: 100%;
    height: 100%;
    border: 1px solid ${error ? colors.error[300] : colors.pallet[300]};
    background: ${colors.pallet[500]};
    &:hover {
      background: ${colors.pallet[400]};
    }
    input {
      background-color: transparent;
      border: none;
      outline: none;
      color: ${colors.pallet[0]};
      padding: 10px 16px;
      font-size: 16px;
      &::placeholder {
        font-weight: 300;
        color: ${colors.pallet[200]};
      }
    }
  `}
`;

export const Menu = styled(Flex)`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: calc(100% + 10px);
    border: 1px solid ${colors.pallet[300]};
    background: ${colors.pallet[500]};
    max-height: 250px;
    overflow-y: auto;
    width: 100%;
    z-index: 3000;
  `}
`;

export const Option = styled(Flex)`
  ${({ theme: { colors } }) => css`
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: ${colors.pallet[600]};
    &:hover {
      background-color: ${colors.pallet[700]};
    }
  `}
`;
export const Pill = styled(Flex)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.pallet[400]};
    border: 1px solid ${colors.pallet[600]};
  `}
`;
