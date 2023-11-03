import React from "react";
import { useTheme } from "@emotion/react";
import { P3 } from "@/components/Typography";
import { Sup, Label } from "./styles";

type LabelProps = {
  label: string;
  required?: true | string;
  withTruncation?: boolean;
};

export default function InputLabel({
  label,
  required,
  withTruncation = true,
}: LabelProps) {
  const { colors } = useTheme();
  return (
    <Label>
      <P3
        text={label}
        fontSize={{ xs: "14px", md: "16px" }}
        color={colors.text.heading}
        truncationWidth={withTruncation ? "200px" : undefined}
        capitalizeFirstLetter
        className="label--paragraph"
      />
      {required && <Sup>*</Sup>}
    </Label>
  );
}
