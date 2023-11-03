import React from "react";
import { FieldValues } from "react-hook-form";
import _ from "lodash";
import BaseFileInput from "./FileBaseInput";
import withHookFormController from "./withFileHookFormController";
import { FileInputPropsType, ControllerType } from "../types";

type WithControllerProps<T extends FieldValues> = ControllerType<T> &
  FileInputPropsType;

export default function FileInput<T extends FieldValues>({
  validationRules,
  ...props
}: WithControllerProps<T>) {
  const Input = React.useMemo(
    () => withHookFormController<T, WithControllerProps<T>>(BaseFileInput),
    []
  );

  const { required } = props;

  const resolvedRequired = React.useMemo(() => {
    let obj = {};
    if (required) {
      obj = {
        validate: (value: any) =>
          !_.isEmpty(value) || typeof required === "string"
            ? required
            : "this field is required",
      };
    }
    return obj;
  }, [required]);

  return (
    <Input
      validationRules={{
        ...resolvedRequired,
        ...validationRules,
      }}
      {...props}
      value={undefined}
    />
  );
}
