import React from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useTheme } from "@emotion/react";
import Icon from "@/components/Icon";
import { NavLink } from "@/components/Links";
import { P2 } from "@/components/Typography";

import { useAppSelector } from "@/hooks";
import { StyledSidebar } from "./styles";
import { SideNavProps } from "./types";

export default function Sidebar() {
  const {
    aside: { collapsed },
  } = useAppSelector((state) => state.uiActions);

  const { colors } = useTheme();

  const [activePath, setActivePath] = React.useState<string>();

  const sideNavigation: SideNavProps["navItems"] = [
    {
      type: "item",
      path: "/",
      label: "home",
      icon: (active) => (
        <Icon
          name="home"
          color={active ? colors.pallet[0] : colors.pallet[200]}
        />
      ),
    },
    {
      type: "menu",
      label: "planning",
      icon: <Icon name="planning" />,

      items: [
        {
          type: "item",
          path: "/sessions",
          label: "sessions",
          icon: (active) => (
            <Icon
              name="circle"
              color={active ? colors.pallet[0] : colors.pallet[200]}
            />
          ),
        },
        {
          type: "item",
          path: "/venues",
          label: "venues",
          icon: (active) => (
            <Icon
              name="circle"
              color={active ? colors.pallet[0] : colors.pallet[200]}
            />
          ),
        },
      ],
    },
    {
      type: "menu",
      label: "attendees",
      icon: <Icon name="user" />,
      items: [
        {
          type: "item",
          path: "/venues",
          label: "venues",
          icon: (active) => (
            <Icon
              name="circle"
              color={active ? colors.pallet[0] : colors.pallet[200]}
            />
          ),
        },
      ],
    },
  ];

  return (
    <StyledSidebar collapsed={collapsed}>
      <Menu>
        {sideNavigation.map((navigation) => {
          if (navigation.type === "item") {
            return (
              <MenuItem
                icon={
                  navigation.icon
                    ? navigation.icon(activePath === navigation.path)
                    : undefined
                }
                key={`${navigation.type}-${navigation.label}`}
              >
                <NavLink setActive={setActivePath} to={navigation.path}>
                  {navigation.label}
                </NavLink>
              </MenuItem>
            );
          } else {
            return (
              <SubMenu
                icon={navigation.icon}
                label={<P2 text={navigation.label} capitalizeFirstLetter />}
              >
                {navigation.items.map((item) => (
                  <MenuItem
                    icon={
                      item.icon
                        ? item.icon(activePath === item.path)
                        : undefined
                    }
                    key={`${item.type}-${item.label}`}
                  >
                    <NavLink setActive={setActivePath} to={item.path}>
                      {item.label}
                    </NavLink>
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }
        })}
      </Menu>
    </StyledSidebar>
  );
}
