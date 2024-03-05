import React from "react";
import { render } from "@testing-library/react";
import getTheme from "@/theme";
import { ThemeProvider } from "@emotion/react";

export default function renderWithProvider(element: React.ReactNode) {
  return render(<ThemeProvider theme={getTheme()}>{element}</ThemeProvider>);
}
