import styled from "@emotion/styled";
import { css } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import devices from "@/theme/sizes";
import { Snackbar as MaterialSnackbar } from "@mui/material";

interface ContainerProps {
  status: "success" | "failure" | "info";
  type: "filled" | "normal";
}

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !["type"].includes(prop);

export const Container = styled("div", { shouldForwardProp })<ContainerProps>`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  box-shadow: 0 20px 50px 0 rgba(55, 29, 83, 0.06);
  ${({ type }) =>
    type === "normal"
      ? css`
          padding: 8px;
          ${devices.md} {
            padding: 12px;
          }
        `
      : css`
          padding: 8px 16px;
          ${devices.md} {
            padding: 12px 24px;
          }
        `}

  ${({ theme, status, type }) => {
    const values = {
      normal: {
        info: css`
          border: 1px solid ${theme.colors.pallet[100]};
          background: ${theme.colors.pallet[500]};
        `,
        failure: css`
          border: 1px solid ${theme.colors.text.error};
          background: ${theme.colors.pallet[100]};
        `,
        success: css`
          border: 1px solid ${theme.colors.text.success};
          background: ${theme.colors.pallet[100]};
        `,
      },
      filled: {
        info: css`
          background: ${theme.colors.pallet[500]};
        `,
        failure: css`
          background: ${theme.colors.text.error};
        `,
        success: css`
          background: ${theme.colors.text.success};
        `,
      },
    };
    return values[type][status];
  }}
`;

type StyledSnackbarType = {
  type: "normal" | "filled";
};

export const StyledSnackbar = styled(MaterialSnackbar)<StyledSnackbarType>`
  ${({ type }) =>
    type === "normal"
      ? css`
          width: auto;
        `
      : css`
          top: 80px !important;
          left: 0 !important;
          right: 0 !important;
          width: 100%;
          & > div {
            width: 100%;
          }
        `}
`;
