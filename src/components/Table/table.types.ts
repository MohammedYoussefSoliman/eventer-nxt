import React from "react";

import { PaginationProps } from "@/components/PaginationController/types";

export type FooterProps = {
  perPage: number;
  totalRecords: number;
  paginationControls: PaginationProps;
};

export type TableProps<T extends { [key: string]: any }> = {
  headers: {
    header: string;
    headerFormatter?: (header: string) => React.ReactNode;
    formatter?: ({ data }: { data: T; value: any }) => React.ReactNode;
    accessor: keyof T;
  }[];
  tableData: T[];
  paginationControls: PaginationProps;
  totalRecords: number;
};

export type Thead = { Element: React.ReactNode; mapKey: string }[];
export type TRow = { Element: React.ReactNode; mapKey: string }[];
export type TRows = { row: TRow; mapKey: string }[];
