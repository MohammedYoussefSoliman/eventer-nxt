import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "@/components/Grids";

const Wrapper = styled(Flex)`
  label: app-header;
  height: 62px;
  padding: 8px 20px;
  z-index: 1000;
  ${({ theme }) =>
    css`
      position: sticky;
      background: ${theme.colors.pallet[700]};
      border-bottom: 1px solid ${theme.colors.pallet[500]};
    `}
`;

export default Wrapper;
