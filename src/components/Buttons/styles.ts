import { css } from "@emotion/react";
import styled from "@emotion/styled";

export type StyledButtonType = {
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "transparent";
};

type StyledIconButtonType = {
  variant: "primary" | "secondary" | "transparent";
  size?: "md" | "sm";
};

export const StyledButton = styled("button")<StyledButtonType>`
  all: unset;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  min-width: 100px;
  gap: 8px;
  cursor: pointer;
  ${({ theme: { colors }, fullWidth, variant }) => css`
    width: ${fullWidth ? "100%" : "max-content"};
    background-color: ${variant === "primary"
      ? colors.pallet[600]
      : colors.pallet[0]};
    color: ${variant === "primary" ? colors.pallet[0] : colors.pallet[600]};
    border: 1px solid
      ${variant === "primary" ? colors.pallet[300] : colors.pallet[0]};
    &:enabled:hover {
      background-color: ${variant === "primary"
        ? colors.pallet[700]
        : colors.pallet[100]};
    }
    &:disabled {
      background-color: ${variant === "primary"
        ? colors.pallet[400]
        : colors.pallet[200]};
      color: ${variant === "primary" ? colors.pallet[200] : colors.pallet[400]};
    }
  `}
`;
export const StyledIconButton = styled(StyledButton)<StyledIconButtonType>`
  width: 40px;
  padding: 4px;
  min-width: unset;
  cursor: pointer;
  ${({ size, theme: { colors }, variant }) => css`
    width: ${size === "md" ? "40px" : "30px"};
    height: ${size === "md" ? "40px" : "30px"};
    background-color: ${variant === "primary"
      ? colors.pallet[600]
      : variant === "secondary"
      ? colors.pallet[0]
      : "transparent"};
    border: 1px solid
      ${variant === "primary"
        ? colors.pallet[300]
        : variant === "secondary"
        ? colors.pallet[0]
        : "#00000000"};
    &:enabled:hover {
      background-color: ${variant === "secondary"
        ? colors.pallet[100]
        : colors.pallet[700]};
    }
    &:disabled {
      background-color: ${variant === "primary"
        ? colors.pallet[400]
        : variant === "secondary"
        ? colors.pallet[700]
        : colors.pallet[200]};
    }
  `}
`;
