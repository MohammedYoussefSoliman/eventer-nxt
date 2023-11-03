import React from "react";
import { P3 } from "@/components/Typography/Typography";
import { ButtonTypeProps } from "../types";
import Button from "./styles";

export default function LinkButton({
  color,
  onClick,
  children,
  className,
  disabled,
}: ButtonTypeProps) {
  let content;

  if (typeof children === "string") {
    content = (
      <P3
        hover={{
          decoration: "underline",
        }}
        color={color}
        capitalizeFirstLetter
        text={children}
      />
    );
  } else {
    content = children;
  }

  return (
    <Button disabled={disabled} onClick={onClick} className={className}>
      {content}
    </Button>
  );
}
