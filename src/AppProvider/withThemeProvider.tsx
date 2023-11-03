import React from "react";
import { ThemeProvider } from "@emotion/react";
import getTheme from "@/theme";

export default function withThemeProvider<T extends {}>(
  WrappedComponent: React.ComponentType<T>
) {
  function Wrapper(props: T) {
    return (
      <ThemeProvider theme={getTheme()}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  }

  return Wrapper;
}
