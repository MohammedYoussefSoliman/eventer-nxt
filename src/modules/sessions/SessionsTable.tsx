import React from "react";
import { useTheme } from "@emotion/react";
import Table from "@/components/Table";
import { Flex } from "@/components/Grids";
import Figure from "@/components/Figure";
import { P1, P2, P3 } from "@/components/Typography";

import sessionTableMapper from "./mapper";
import { SessionTableProps } from "./types";
import Icon from "@/components/Icon";
import { IconButton } from "@/components/Buttons";

export default function SessionsTable({
  sessions,
  limit,
  count,
  ...rest
}: SessionTableProps) {
  const { colors } = useTheme();

  const headerFormatter = (heading: string) => (
    <Flex>
      <P3
        text={heading}
        color={colors.pallet[100]}
        capitalizeFirstLetter
        weight={300}
        textAlign="center"
      />
    </Flex>
  );

  return (
    <Table
      tableData={sessionTableMapper(sessions)}
      headers={[
        {
          header: "session name",
          accessor: "name",
          headerFormatter,
          formatter: ({ value }) => (
            <Flex align="center" gap="10px">
              <Figure url={value.cover} alt={value.name} />
              <P2 text={value.title} color={colors.pallet[0]} weight={300} />
            </Flex>
          ),
        },
        {
          header: "date",
          accessor: "date",
          headerFormatter,
          formatter: ({ value }) => (
            <Flex align="center" gap="10px">
              <Icon name="calendar" />
              <P2 text={value} color={colors.pallet[0]} weight={300} />
            </Flex>
          ),
        },
        {
          header: "time",
          accessor: "time",
          headerFormatter,
          formatter: ({ value }) => (
            <Flex align="center" gap="10px">
              <Icon name="watch" />
              <P3
                text={`${value.from} - ${value.till}`}
                color={colors.pallet[0]}
              />
            </Flex>
          ),
        },
        {
          header: "venue",
          accessor: "venue",
          headerFormatter,
          formatter: ({ value }) => (
            <P1 text={value.name} color={colors.pallet[0]} weight={300} />
          ),
        },
        {
          header: "",
          accessor: "id",
          headerFormatter,
          formatter: ({ value }) => (
            <Flex gap="8px">
              <IconButton
                icon="edit"
                onClick={() => console.log(value)}
                variant="transparent"
              />
              <IconButton
                icon="chevron-right"
                onClick={() => console.log(value)}
                variant="transparent"
              />
            </Flex>
          ),
        },
      ]}
      footer={{
        limit,
        count,
        paginationControls: rest,
      }}
    />
  );
}
