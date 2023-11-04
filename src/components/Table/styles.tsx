import styled from "@emotion/styled";
import { Flex } from "@/components/Grids";
import { css } from "@emotion/react";

export const TableWrapper = styled(Flex)`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  tr td {
    border-bottom: none;
  }
  thead tr td {
    padding: 10px;
    ${({ theme }) => css`
      background-color: ${theme.colors.pallet[600]};
    `}
    &:first-of-type {
      padding-inline-start: 16px;
    }
    &:last-of-type {
      padding-inline-end: 16px;
    }
  }
  tbody {
    tr td {
      padding: 8px;
      ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.pallet[200]};
        background-color: ${theme.colors.pallet[500]};
      `}
      &:first-of-type {
        padding-inline-start: 16px;
      }
      &:last-of-type {
        padding-inline-end: 16px;
      }
    }
    tr:last-of-type td {
      border-bottom: none;
    }
  }
`;
