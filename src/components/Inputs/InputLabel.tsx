import React from "react";
import { useTheme } from "@emotion/react";
import { P3 } from "@/components/Typography";
import { Sup, Label } from "./styles";

type LabelProps = {
  label: string;
  required?: true | string;
};

export default function InputLabel({ label, required }: LabelProps) {
  const { colors } = useTheme();

  return (
    <Label>
      <P3
        text={label}
        fontSize={{ xs: "14px", md: "16px" }}
        color={colors.text.primary}
        className="label--paragraph"
        weight={300}
        capitalizeFirstLetter
      />
      {required && <Sup>*</Sup>}
    </Label>
  );
}
