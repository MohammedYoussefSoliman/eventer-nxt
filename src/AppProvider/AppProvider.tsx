import React from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import { ThemeProvider } from "@emotion/react";
import { useAppSelector } from "@/hooks";
import getTheme from "@/theme";
import GlobalStyles from "@/theme/GlobalStyles/GlobalStyles";
import Snackbar from "@/components/Snackbar";

type Props = {
  children: React.ReactNode;
};

function AppProvider({ children }: Props) {
  const {
    uiActions: { snackbar },
  } = useAppSelector((state) => state);

  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      {children}
      {snackbar?.message && <Snackbar {...snackbar} />}
    </ThemeProvider>
  );
}

export default AppProvider;
