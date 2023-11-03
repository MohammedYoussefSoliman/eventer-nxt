import React from "react";
import { Flex } from "@/components/Grids";
import { Small } from "@/components/Typography";
import { InputPropsType } from "./types";
import { Input, Wrapper } from "./styles";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

export default React.forwardRef(
  (
    {
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
      helper,
      ...InputProps
    }: InputPropsType,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <Flex
        className={className}
        width={width || "100%"}
        direction="column"
        gap={{ xs: 5, md: 8 }}
        ph="2px"
      >
        {label && <InputLabel label={label} required={required} />}
        <Wrapper
          className="input--wrapper"
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
          <Input
            name={name}
            ref={ref}
            variant={variant}
            error={!!error}
            adornment={Boolean(suffixComponent || prefixComponent)}
            dense={dense}
            placeholder={placeholder}
            {...InputProps}
          />
          {suffixComponent && suffixComponent}
        </Wrapper>
        {typeof helper === "string" ? (
          <Flex ms={{ xs: 6, sm: 8 }}>
            <Small text={helper} />
          </Flex>
        ) : (
          helper
        )}
        {error && <InputError error={error} />}
      </Flex>
    );
  }
);
