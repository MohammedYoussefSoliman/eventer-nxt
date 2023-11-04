import React from "react";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { P2 } from "@/components/Typography/Typography";
import { NavLinkTypeProps } from "../types";

export default function NavigationLink({
  to,
  children,
  setActive: callback,
}: NavLinkTypeProps) {
  const { colors } = useTheme();

  const [active, setActive] = React.useState<boolean>(false);

  return (
    <NavLink
      onClick={() => {
        if (callback && active) {
          setTimeout(() => callback(to), 0);
        }
      }}
      to={to}
    >
      {({ isActive }) => {
        setActive(isActive);
        return (
          <P2
            color={isActive ? colors.pallet[0] : colors.pallet[200]}
            capitalizeFirstLetter
            text={children}
            weight={500}
          />
        );
      }}
    </NavLink>
  );
}
