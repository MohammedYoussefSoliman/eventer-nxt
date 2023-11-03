import { OptionProps, components } from "react-select";
import { useTheme } from "@emotion/react";
import { P1 } from "@/components/Typography";
import { OptionType } from "./types";

export default function Option(props: OptionProps<OptionType, true>) {
  const { colors } = useTheme();
  const { children, isSelected } = props;

  return (
    <components.Option {...props}>
      {typeof children === "string" ? (
        <P1
          text={children}
          color={isSelected ? colors.text.heading : colors.text.body}
          weight={isSelected ? 500 : 400}
          capitalizeFirstLetter
        />
      ) : (
        children
      )}
    </components.Option>
  );
}
