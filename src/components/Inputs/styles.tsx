import { css } from "@emotion/react";
import styled from "@emotion/styled";
import devices from "@/theme/sizes";
import { Flex } from "@/components/Grids";
import images from "@/assets/images";

type InputWrapperProps = {
  error?: boolean;
};

type InputProps = {
  adornment?: boolean;
  error?: boolean;
};

export const Wrapper = styled(Flex)<InputWrapperProps>`
  position: relative;
  padding: 12px 16px;
  height: 50px;
  width: 100%;
  min-width: 100%;
  outline: none;
  overflow: visible;
  ${({ theme }) => css`
    background: ${theme.colors.pallet[500]};
  `}
  .MuiSvgIcon-root {
    width: 28px;
    height: 28px;
    ${({ theme }) => css`
      color: ${theme.colors.pallet[0]};
    `}
  }
  &:focus-within {
    ${({ theme }) => css`
      outline: 2px solid ${theme.colors.pallet[100]};
    `}
  }
  ${({ theme }) =>
    css`
      border: 1px solid ${theme.colors.pallet[300]};
    `}
  &:hover {
    ${({ theme }) =>
      css`
        background: ${theme.colors.pallet[400]};
      `}
  }
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ error, theme }) =>
    error &&
    css`
      border: 1px solid ${theme.colors.error[300]};
      &:focus-within {
        outline: 2px solid ${theme.colors.error[300]};
      }
      .MuiSvgIcon-root {
        color: ${theme.colors.text.error};
      }
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height} !important;
    `}
`;

export const Input = styled("input")<InputProps>`
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  font-weight: 300;
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
  `}
  ${({ adornment }) =>
    adornment &&
    css`
      max-width: 85%;
    `}
  &::placeholder {
    font-family: inherit;
    ${({ theme }) => css`
      color: ${theme.colors.pallet[200]};
      font-size: 14px;
      font-weight: 200;
    `}
  }

  ${({ error, theme }) =>
    error &&
    css`
      &::placeholder {
        color: ${theme.colors.text.error};
      }
    `}
  ${devices.lg} {
    font-size: 18px;
  }
`;

export const Label = styled("label")`
  display: inline;
  .label--paragraph {
    display: inline;
  }
`;

export const AreaInput = styled("textarea")<InputProps>`
  flex: 1;
  height: 100%;
  background: transparent;
  overflow-y: auto;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  ${({ theme }) => css`
    color: ${theme.colors.text.heading};
  `}

  ${({ adornment }) =>
    adornment &&
    css`
      max-width: 85%;
    `}
  &::placeholder {
    ${({ theme }) => css`
      color: ${theme.colors.text.body};
    `}
  }

  ${({ error, theme }) =>
    error &&
    css`
      &::placeholder {
        color: ${theme.colors.text.error};
      }
    `}
  ${devices.lg} {
    font-size: 18px;
  }
`;

export const Sup = styled.sup`
  ${({ theme }) => css`
    display: inline;
    color: ${theme.colors.text.error};
    weight: 600;
    font-size: 16px;
  `}
`;

type FileInputWrapperProps = {
  error?: boolean;
};

export const ImageWrapper = styled(Flex)<FileInputWrapperProps>`
  label: image-input-wrapper;
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  .text--highlight {
    ${({ theme }) =>
      css`
        color: ${theme.colors.pallet[0]};
        font-weight: 500;
      `}
  }
  .small-prev {
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 50%;
  }
  ${({ theme }) =>
    css`
      border: 1px dashed ${theme.colors.pallet[300]};
    `}
  ${({ error, theme }) =>
    error &&
    css`
      border: 1px dashed ${theme.colors.error[300]};
    `}
  .input {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cloud--wrapper {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    ${({ theme }) =>
      css`
        background: ${theme.colors.pallet[400]};
      `}
  }
  .remove--button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }
  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.pallet[400]};
      .cloud--wrapper {
        background-color: ${theme.colors.pallet[500]};
      }
    `}
  }
`;

export const TextArea = styled("textarea")<InputProps>`
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  resize: none;
  font-size: 16px;
  font-family: inherit;
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
  `}
  ${({ adornment }) =>
    adornment &&
    css`
      max-width: 85%;
    `}
  &::placeholder {
    ${({ theme }) => css`
      color: ${theme.colors.text.primary};
      font-size: 14px;
      font-weight: 300;
    `}
  }
  ${({ error, theme }) =>
    error &&
    css`
      &::placeholder {
        color: ${theme.colors.text.error};
      }
    `}
  ${devices.lg} {
    font-size: 18px;
  }
`;

export const AreaWrapper = styled(Wrapper)`
  label: textarea-wrapper;
  height: 100px;
  ${devices.md} {
    height: 100px;
    width: 411px;
  }
  ${devices.lg} {
    height: 150px;
    width: 411px;
  }
`;

export const SmallImagePlaceHolder = styled(Flex)`
  width: 160px;
  height: 160px;
  background-image: url(${images.USER_PLACEHOLDER});
  background-size: cover;
  background-position: center;
`;
