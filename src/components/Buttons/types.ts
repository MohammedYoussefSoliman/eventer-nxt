import React from "react";
import { IconType } from "@/components/Icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  icon?: IconType;
}
export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "transparent";
  icon: IconType;
  size?: "md" | "sm";
}
