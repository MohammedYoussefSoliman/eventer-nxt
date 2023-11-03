import { css } from "@emotion/react";
import styled from "@emotion/styled";
import CSS from "csstype";

type SpinnerWrapperProps = {
  wrapperPadding?: CSS.Property.Padding;
  size?: CSS.Property.Width;
};

const SpinnerWrapper = styled("div")<SpinnerWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ wrapperPadding }) =>
    wrapperPadding &&
    css`
      padding: ${wrapperPadding};
    `}
  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}
`;

export default SpinnerWrapper;
