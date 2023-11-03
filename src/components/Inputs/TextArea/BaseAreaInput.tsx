import React from "react";
import { Flex } from "@/components/Grids";
import { TextAreaPropsType } from "../types";
import { TextArea, AreaWrapper } from "../styles";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

export default function BaseInput({
  name,
  label,
  variant = "outlined",
  prefixComponent,
  suffixComponent,
  width,
  height,
  error,
  placeholder,
  className,
  rounded,
  required,
  borderless,
  dense,
  ...InputProps
}: TextAreaPropsType) {
  return (
    <Flex
      className={className}
      width={width || "100%"}
      direction="column"
      gap={{ xs: 5, md: 8 }}
    >
      {label && <InputLabel label={label} required={required} />}
      <AreaWrapper
        className="area--wrapper"
        variant={variant}
        height={height}
        error={!!error}
        rounded={rounded}
        borderless={borderless}
        dense={dense}
        align="center"
        justify="space-between"
      >
        {prefixComponent && prefixComponent}
        <TextArea
          variant={variant}
          error={!!error}
          adornment={Boolean(suffixComponent || prefixComponent)}
          dense={dense}
          placeholder={placeholder}
          {...InputProps}
        />
        {suffixComponent && suffixComponent}
      </AreaWrapper>
      {error && <InputError error={error} />}
    </Flex>
  );
}
