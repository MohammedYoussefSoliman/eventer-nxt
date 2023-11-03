import React from "react";
import { AsyncProps } from "react-select/async";
import { Props, GroupBase } from "react-select";

export type OptionType = {
  label: React.ReactNode;
  value: string | number;
};
export type AsyncOptionType = {
  label: React.ReactNode;
  stringLabel: string;
  value: string;
};

export interface SelectProps
  extends Omit<
    Props<OptionType, boolean, GroupBase<OptionType>>,
    "components" | "isMulti"
  > {
  name: string;
  options: OptionType[];
  label?: string;
  error?: string;
  rounded?: boolean;
  dense?: boolean;
  isMulti?: true;
  required?: true | string;
  changeHandler?: (value: any) => void;
}
export interface AsyncSelectProps
  extends AsyncProps<OptionType, boolean, GroupBase<OptionType>> {
  name: string;
  loadOptions: (
    inputValue: string,
    callback: (options: AsyncOptionType[]) => void,
  ) => Promise<AsyncOptionType[]>;
  label?: string;
  error?: string;
  rounded?: boolean;
  required?: true | string;
  fullHeight?: boolean;
  changeHandler?: (value: any) => void;
}
