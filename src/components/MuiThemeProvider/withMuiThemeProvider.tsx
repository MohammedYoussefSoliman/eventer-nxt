import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({});
export default function withMuiThemeProvider<T extends {}>(
  WrappedComponent: React.ComponentType<T>,
) {
  function ThemeWrapper(props: T) {
    return (
      <ThemeProvider theme={theme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  }

  return ThemeWrapper;
}
