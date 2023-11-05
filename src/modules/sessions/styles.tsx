import styled from "@emotion/styled";
import { Flex } from "@/components/Grids";
import { css } from "@emotion/react";

const Wrapper = styled(Flex)`
  label: home-wrapper;
  width: 100%;
  height: calc(100vh - 62px);
  overflow-y: auto;
`;

export const FormWrapper = styled(Flex)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.pallet[600]};
  `}
`;

export default Wrapper;
