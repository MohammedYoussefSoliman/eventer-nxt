import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import AsyncSelect from "./AsyncSelect";
import withHookFormController from "./withAsyncHookFormController";
import { ControllerType } from "../types";
import { AsyncSelectProps } from "./types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  AsyncSelectProps;

export default function AsyncSelectInput<T extends FieldValues>(
  props: WithControllerProps<T>
) {
  const Select = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(AsyncSelect),
    []
  );

  const { required } = props;

  return (
    <Select
      validationRules={
        required
          ? {
              validate: (value) =>
                !_.isEmpty(value) || typeof required === "string"
                  ? required
                  : "this field is required",
            }
          : undefined
      }
      {...props}
    />
  );
}
