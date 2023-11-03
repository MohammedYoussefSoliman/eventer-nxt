import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function MuiThemeProvider({ children }: Props) {
  const theme = createTheme({});
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
