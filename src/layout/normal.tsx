import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useAppSelector } from "@/hooks";
import LayoutWrapper from "./styles";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    aside: { collapsed },
  } = useAppSelector((state) => state.uiActions);

  return (
    <LayoutWrapper>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <main className="content">{children}</main>
    </LayoutWrapper>
  );
}
