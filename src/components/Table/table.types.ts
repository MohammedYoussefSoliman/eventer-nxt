import React from "react";

import { PaginationProps } from "@/components/PaginationController/types";

export type FooterProps = {
  count: number;
  limit: number;
  perPage: number;
  paginationControls: Omit<PaginationProps, "pagesLength">;
};

export type TableProps<T extends { [key: string]: any }> = {
  headers: {
    header: string;
    headerFormatter?: (header: string) => React.ReactNode;
    formatter?: ({ data }: { data: T; value: any }) => React.ReactNode;
    accessor: keyof T;
  }[];
  tableData: T[];
  footer: {
    paginationControls: Omit<PaginationProps, "pagesLength">;
    count: number;
    limit: number;
  };
};

export type Thead = { Element: React.ReactNode; mapKey: string }[];
export type TRow = { Element: React.ReactNode; mapKey: string }[];
export type TRows = { row: TRow; mapKey: string }[];
