/* eslint-disable consistent-return */
import React from "react";
import Async from "react-select/async";
import { debounce } from "lodash";
import { Flex } from "@/components/Grids";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import DropdownIndicator from "./DropdownIndicator";
import Placeholder from "./Placeholder";
import Option from "./Option";
import SingleValue from "./SingleValue";
import useSelectStyles from "./useSelectStyles";
import { AsyncSelectProps } from "./types";

export default React.memo(function AsyncSelect({
  name,
  label,
  error,
  rounded,
  onChange,
  value,
  required,
  placeholder,
  loadOptions,
  isDisabled,
  isClearable,
  isLoading,
  defaultValue,
  defaultInputValue,
  fullHeight,
  onMenuOpen,
  onMenuClose,
}: AsyncSelectProps) {
  const styles = useSelectStyles({
    error: Boolean(error),
    rounded,
    fullHeight,
  });

  const debouncedLoadOptions = debounce(loadOptions, 400);

  return (
    <Flex gap={{ xs: 6, md: 8 }} direction="column" fullWidth>
      {label && <InputLabel label={label} required={required} />}
      <Async
        name={name}
        placeholder={placeholder}
        styles={styles}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
          Placeholder,
          Option,
          SingleValue,
        }}
        isDisabled={isDisabled}
        isClearable={isClearable}
        isLoading={isLoading}
        defaultOptions
        cacheOptions
        loadOptions={debouncedLoadOptions}
        onChange={onChange}
        value={value}
        defaultInputValue={defaultInputValue}
        defaultValue={defaultValue}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
      />
      {error && <InputError error={error} />}
    </Flex>
  );
});
