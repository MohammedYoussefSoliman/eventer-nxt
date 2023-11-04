import React from "react";
import { Flex } from "@/components/Grids";
import Sidebar from "@/components/Sidebar";
import LayoutWrapper from "./styles";

import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <Header />
      <Flex gap={{ xs: 8, md: 16 }} flex={1} fullWidth>
        <Sidebar />
        <main className="content">{children}</main>
      </Flex>
    </LayoutWrapper>
  );
}
