import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal--card {
    width: 50vw;
    .modal--body {
      max-height: 80vh;
      width: 100%;
      overflow-y: auto;
    }
  }
`;

export const ModalCard = styled("div")`
  width: 50%;
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.pallet[300]};
    background: ${colors.pallet[500]};
    padding: 20px;
  `}
`;

export default Wrapper;
