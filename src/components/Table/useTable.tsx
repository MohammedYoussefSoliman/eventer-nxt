import { v4 as uuidv4 } from "uuid";
import { useTheme } from "@emotion/react";
import { P2 } from "@/components/Typography";
import { TableProps, Thead, TRow, TRows } from "./table.types";

const useTable = <T extends { [key: string]: any }>({
  headers,
  tableData,
}: Omit<TableProps<T>, "footer">) => {
  const { colors } = useTheme();

  // build the headers
  const tHeaders: Thead = headers.map((h) => {
    if (h.headerFormatter) {
      return {
        Element:
          typeof h.headerFormatter(h.header) === "string" ? (
            <P2 color={colors.text.primary} capitalizeFirstLetter>
              {h.headerFormatter(h.header)}
            </P2>
          ) : (
            h.headerFormatter(h.header)
          ),
        mapKey: `${h.header}-${uuidv4()}`,
      };
    }
    return {
      Element: (
        <P2
          text={h.header}
          weight={500}
          color={colors.text.greyish}
          capitalizeFirstLetter
        />
      ),
      mapKey: `${h.header}-${uuidv4()}`,
    };
  });

  // build rows
  const tRows: TRows = [];
  tableData.forEach((rowData) => {
    const preparedRow: TRow = [];
    headers.forEach((head) => {
      const foundDataAccessor = rowData[head.accessor];
      if (foundDataAccessor !== undefined) {
        if (head.formatter) {
          preparedRow.push({
            Element:
              typeof head.formatter({
                data: rowData,
                value: foundDataAccessor,
              }) === "string" ? (
                <P2 color={colors.text.primary}>
                  {head.formatter({ data: rowData, value: foundDataAccessor })}
                </P2>
              ) : (
                head.formatter({ data: rowData, value: foundDataAccessor })
              ),
            mapKey: `row-element-${uuidv4()}`,
          });
        } else {
          preparedRow.push({
            Element: <P2 color={colors.text.primary}>{foundDataAccessor}</P2>,
            mapKey: `row-element-${uuidv4()}`,
          });
        }
      } else {
        preparedRow.push({
          Element: "",
          mapKey: `row-element-${uuidv4()}`,
        });
      }
    });
    tRows.push({ row: preparedRow, mapKey: `rows-element-${uuidv4()}` });
  });
  return { tHeaders, tRows };
};

export default useTable;
