import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import SelectBase from "./SelectBase";
import withHookFormController from "./withHookFormController";
import { ControllerType } from "../types";
import { SelectProps } from "./types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  SelectProps;

export default function SelectInput<T extends FieldValues>(
  props: WithControllerProps<T>
) {
  const Select = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(SelectBase),
    []
  );

  const { required } = props;

  return (
    <Select
      validationRules={
        required
          ? {
              validate: (value) =>
                !_.isEmpty(value) ||
                (typeof required === "string" ? required : "requiredField"),
            }
          : undefined
      }
      {...props}
    />
  );
}
