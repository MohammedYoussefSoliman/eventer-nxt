import React from "react";
import { useTheme } from "@emotion/react";
import Typography from "@/components/Typography/Typography";

type Props = {
  error: string;
};

export default function InputError({ error }: Props) {
  const {
    colors: {
      text: { error: errorColor },
    },
  } = useTheme();

  return (
    <Typography
      text={error}
      color={errorColor}
      fontSize={{ xs: "12px", md: "14px" }}
      weight={500}
      capitalizeFirstLetter
    />
  );
}
