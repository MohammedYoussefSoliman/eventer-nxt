import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export type OptionType = {
  label: React.ReactNode;
  stringLabel?: string;
  disabled?: boolean;
  value: string | number;
};

export type SelectProps = {
  options: OptionType[];
  onChange: (value: OptionType | OptionType[]) => void;
  name: string;
  isMulti?: boolean;
  isLoading?: boolean;
  required?: true | string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
  searchHandler?: (inputValue: string) => Promise<OptionType[]>;
  label?: string;
  placeholder?: string;
  error?: string;
};
