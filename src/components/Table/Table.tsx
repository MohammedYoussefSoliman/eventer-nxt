import React from "react";
import { TableProps } from "./table.types";
import useTable from "./useTable";
import { TableWrapper, StyledTable } from "./styles";

import TableFooter from "./TableFooter";

export default function Table<T extends { [key: string]: any }>({
  headers,
  tableData,
  footer,
}: TableProps<T>) {
  const { tHeaders, tRows } = useTable({ headers, tableData });
  return (
    <TableWrapper direction="column" fullWidth className="table--wrapper">
      <StyledTable>
        <thead>
          <tr>
            {tHeaders.map(({ Element, mapKey }) => (
              <td key={mapKey}>{Element}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tRows.map(({ row, mapKey: rowMapKey }) => (
            <tr key={rowMapKey}>
              {row.map(({ Element, mapKey: elMapKey }) => (
                <td key={elMapKey}>{Element}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <TableFooter perPage={tableData.length} {...footer} />
    </TableWrapper>
  );
}
