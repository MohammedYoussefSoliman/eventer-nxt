import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  label: avatar;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
  ${({ theme }) => css`
    background-color: ${theme.colors.pallet[400]};
  `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Wrapper;
