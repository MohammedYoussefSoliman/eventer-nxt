import { useTheme } from "@emotion/react";
import { P2 } from "@/components/Typography";
import PaginationController from "@/components/PaginationController";
import { FooterProps } from "./table.types";
import { TableFooterWrapper } from "./styles";

export default function TableFooter({
  perPage,
  count,
  paginationControls,
  limit,
}: FooterProps) {
  const { colors } = useTheme();
  return (
    <TableFooterWrapper
      fullWidth
      p="10px"
      align="center"
      justify="space-between"
    >
      <P2
        text={`showing ${perPage} entries of ${count}`}
        color={colors.pallet[0]}
        capitalizeFirstLetter
      />
      {count > 0 && (
        <PaginationController
          pagesLength={Math.ceil(count / limit)}
          {...paginationControls}
        />
      )}
    </TableFooterWrapper>
  );
}
