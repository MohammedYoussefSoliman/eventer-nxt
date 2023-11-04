import { Sidebar } from "react-pro-sidebar";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledSidebar = styled(Sidebar)`
  padding: 16px;
  ${({ theme }) =>
    css`
      background: ${theme.colors.pallet[700]};
      border: none;
      border-right: 1px solid ${theme.colors.pallet[500]} !important;
      box-shadow: 14px 4px 50px 0px #00000033;

      .ps-sidebar-container {
        background: ${theme.colors.pallet[700]};
        .ps-submenu-root,
        .ps-menuitem-root {
          background: ${theme.colors.pallet[700]};
          color: ${theme.colors.pallet[0]};
          border-bottom: 1px solid ${theme.colors.pallet[500]};
          .ps-menu-button {
            &:hover {
              background: ${theme.colors.pallet[600]};
            }
          }
          .ps-menu-button {
            padding-left: 0;
          }
        }
      }
    `}
`;
