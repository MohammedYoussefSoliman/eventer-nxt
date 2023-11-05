import React from "react";
import Spinner from "@/components/Spinner";
import Icon from "@/components/Icon";
import { Flex } from "@/components/Grids";
import { IconButton } from "@/components/Buttons";
import { Small } from "@/components/Typography";
import InputLabel from "../InputLabel";
import InputError from "../InputError";
import { Wrapper, Menu, Heading, Option, Pill } from "./styles";
import { SelectProps, OptionType } from "./types";

export default function Select({
  name,
  options,
  onChange,
  isLoading,
  isMulti,
  placeholder,
  required,
  label,
  error,
  searchHandler,
  register,
  watch,
  setValue,
}: SelectProps) {
  const formValues = watch(name);
  let currentMultiSelectedOptions: OptionType[] = [];
  let currentSingleSelectedOptions: OptionType | undefined;

  if (formValues) {
    if (isMulti) {
      currentMultiSelectedOptions = formValues.map((val: string | number) => {
        const opt = options.find((option) => option.value === val);
        return opt;
      });
    } else {
      currentSingleSelectedOptions = options.find(
        (opt) => opt.value === formValues[0]!
      );
    }
  }
  const [open, setOpen] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [selected, setSelected] = React.useState<OptionType | undefined>(
    currentSingleSelectedOptions
  );
  const [filteredOptions, setFilteredOptions] = React.useState<OptionType[]>();
  const [selectedMulti, setSelectedMulti] = React.useState<OptionType[]>(
    currentMultiSelectedOptions
  );
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const deleteOption = React.useCallback(
    (value: string | number) => {
      setSelectedMulti(selectedMulti.filter((opt) => opt.value !== value));
    },
    [selectedMulti]
  );

  const filterOptions = React.useCallback(async () => {
    if (!searchValue || !searchHandler) return;
    const options = await searchHandler(searchValue);
    setFilteredOptions(options);
  }, [searchHandler, searchValue]);

  React.useEffect(() => {
    filterOptions();
  }, [filterOptions, searchValue]);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  React.useEffect(() => {
    if (isMulti && selectedMulti.length > 0) {
      setValue(
        name,
        selectedMulti
          .map((opt) => opt.value)
          .filter((opt) => opt !== "add-user")
      );
    } else {
      if (selected && selected.value !== "add-user")
        setValue(name, [selected?.value]);
    }
  }, [selected, selectedMulti, isMulti, setValue, name]);

  const optionsToDisplay = filteredOptions ? filteredOptions : options;

  return (
    <Flex direction="column" gap={{ xs: 5, md: 8 }} fullWidth ph="2px">
      {label && <InputLabel label={label} required={required} />}

      <Wrapper ref={wrapperRef} error={!!error} direction="column" fullWidth>
        <input type="hidden" {...register(name, { required })} />
        <Heading
          onClick={() => setOpen(true)}
          pr="16px"
          align="center"
          gap="16px"
          error={!!error}
        >
          <Flex fullHeight>
            <input
              placeholder={placeholder}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Flex>
          {selectedMulti && selectedMulti.length > 0 && (
            <Flex gap="8px" flex={1}>
              {selectedMulti
                .filter((item) => !!item.stringLabel)
                .map((item) => (
                  <Pill
                    pl="8px"
                    align="center"
                    key={item.stringLabel}
                    gap="4px"
                  >
                    <Small text={item.stringLabel} />
                    <IconButton
                      icon="times"
                      size="sm"
                      variant="transparent"
                      onClick={() => deleteOption(item.value)}
                    />
                  </Pill>
                ))}
            </Flex>
          )}
          <Flex ms="auto">
            {isLoading ? <Spinner /> : <Icon name="chevron-down" />}
          </Flex>
        </Heading>
        {open && (
          <Menu direction="column" gap="10px" p="10px">
            {optionsToDisplay.map((option) => (
              <Option
                key={option.value}
                onClick={() => {
                  if (isMulti) {
                    const foundOption = selectedMulti.find(
                      (opt) => opt.value === option.value
                    );
                    if (!foundOption) {
                      setSelectedMulti([...selectedMulti, option]);
                    }
                    onChange([...selectedMulti, option]);
                  } else {
                    setSelected(option);
                    onChange(option);
                  }
                  setOpen(false);
                }}
              >
                {option.label}
              </Option>
            ))}
          </Menu>
        )}
      </Wrapper>
      {error && <InputError error={error} />}
    </Flex>
  );
}
