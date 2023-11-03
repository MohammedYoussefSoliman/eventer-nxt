import React from "react";
import moment from "moment";
import { Controller, FieldValues, Path } from "react-hook-form";
import { ControllerType, DateInputProps } from "../types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  DateInputProps;

export default function withHookFormController<
  FormType extends FieldValues,
  Props extends WithControllerProps<FormType>,
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
        }) => (
          <Component
            {...fields}
            inputRef={ref}
            error={error?.message}
            value={moment(value, "YYYY/MM/DD").toDate()}
            onChange={(newValue: Date) => {
              onChange(moment(newValue).format("YYYY/MM/DD"));
            }}
            {...rest}
          />
        )}
      />
    );
  };
}
