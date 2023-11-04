import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "@/components/Grids";
import { P2 } from "@/components/Typography";
import PaginationController from "@/components/PaginationController";
import { FooterProps } from "./table.types";

export default function TableFooter({
  perPage,
  totalRecords,
  paginationControls,
}: FooterProps) {
  const { colors } = useTheme();
  return (
    <Flex fullWidth p="10px" align="center" justify="space-between">
      <P2
        text={`showing ${perPage} entries of ${totalRecords}`}
        color={colors.pallet[0]}
        capitalizeFirstLetter
      />
      <PaginationController {...paginationControls} />
    </Flex>
  );
}
