import React from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { stringDateFormatToDate, convertTimeTo24 } from "@/helpers/functions";
import { ControllerType, DateInputProps } from "../types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  DateInputProps;

export default function withHookFormController<
  FormType extends FieldValues,
  Props extends WithControllerProps<FormType>
>(Component: React.ComponentType<Omit<Props, keyof ControllerType<FormType>>>) {
  return function ControlledComponent({
    control,
    validationRules,
    ...rest
  }: Props) {
    const { name } = rest;

    return (
      <Controller
        name={name as Path<FormType>}
        control={control}
        rules={{ ...validationRules }}
        render={({
          field: { ref, onChange, value, ...fields },
          fieldState: { error },
        }) => {
          return (
            <Component
              {...fields}
              inputRef={ref}
              error={error?.message}
              value={stringDateFormatToDate(value)}
              onChange={(newValue: Date) => {
                onChange(convertTimeTo24(newValue));
              }}
              {...rest}
            />
          );
        }}
      />
    );
  };
}
