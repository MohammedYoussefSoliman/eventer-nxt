import { SingleValueProps, components } from "react-select";
import { useTheme } from "@emotion/react";
import { P1 } from "@/components/Typography";
import { OptionType } from "./types";

export default function SingleValue({
  children,
  ...props
}: SingleValueProps<OptionType, true>) {
  const { colors } = useTheme();

  return (
    <components.SingleValue {...props}>
      {typeof children === "string" ? (
        <P1
          text={children}
          color={colors.pallet[200]}
          weight={500}
          capitalizeFirstLetter
        />
      ) : (
        children
      )}
    </components.SingleValue>
  );
}
