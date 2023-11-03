import React from "react";
import { ThemeProvider } from "@emotion/react";
import { useLocalTheme } from "@/hooks";
import getTheme from "@/theme";
import { Flex } from "@/components/Grids";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import withThemeProvider from "@/AppProvider/withThemeProvider";
import { SxProps } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import withMuiThemeProvider from "@/components/MuiThemeProvider/withMuiThemeProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Icon from "@/components/Icon";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { DateInputProps } from "../types";
import { Input, Wrapper } from "../styles";

type LabelProps = {
  label: string;
  required?: true | string;
};

type ErrorProps = {
  error: string;
};

const Label = withThemeProvider<LabelProps>(InputLabel);
const ErrorComponent = withThemeProvider<ErrorProps>(InputError);

// function PickerIcon() {
//   return <Icon name="calendar" />;
// }

function DateInput({
  onChange,
  value,
  label,
  error,
  required,
}: DateInputProps) {
  const { colors } = useLocalTheme();

  const calendarStyle = React.useMemo<SxProps>(() => {
    return {
      "& .MuiPickersCalendarHeader-label": {
        color: colors.pallet[700],
      },
      "& .MuiTypography-root.MuiTypography-caption": {
        color: colors.pallet[400],
      },
      "& .MuiPickersDay-dayWithMargin": {
        borderColor: colors.pallet[600],
      },
      "& .MuiPickersDay-dayWithMargin.Mui-selected": {
        backgroundColor: colors.pallet[600],
      },
      "& .PrivatePickersYear-yearButton.Mui-selected": {
        backgroundColor: colors.pallet[600],
      },
    };
  }, [colors]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Flex direction="column" gap="8px" fullWidth>
        {label && <Label label={label} required={required} />}
        <DatePicker
          mask="__/__/____"
          PopperProps={{ sx: calendarStyle }}
          value={value}
          onChange={(dateValue) => {
            if (onChange) onChange(dateValue);
          }}
          components={
            {
              // OpenPickerIcon: PickerIcon,
            }
          }
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <ThemeProvider theme={getTheme()}>
              <Wrapper
                className="input--wrapper"
                variant="outlined"
                error={!!error}
              >
                <Flex
                  gap={{ xs: 6, md: 8 }}
                  align="center"
                  justify="space-between"
                  fullWidth
                  fullHeight
                >
                  <Input error={!!error} ref={inputRef} {...inputProps} />

                  {InputProps?.endAdornment}
                </Flex>
              </Wrapper>
            </ThemeProvider>
          )}
        />
        {error && <ErrorComponent error={error} />}
      </Flex>
    </LocalizationProvider>
  );
}

export default withMuiThemeProvider<DateInputProps>(DateInput);
