import React from "react";

export type MenuItem = {
  type: "item";
  path: string;
  label: string;
  icon?: (active: boolean) => React.ReactNode;
};

export type SideMenu = {
  type: "menu";
  label: string;
  icon?: React.ReactNode;
  items: MenuItem[];
};

export type SideNavProps = {
  navItems: (SideMenu | MenuItem)[];
};
