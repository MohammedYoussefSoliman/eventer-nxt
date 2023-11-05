import { pallet, text, error, green } from "./colors";
import { ThemeType } from "./types";

const getTheme = (): ThemeType => ({
  font: "roboto",
  colors: {
    pallet,
    text,
    error,
    green,
  },
});

export default getTheme;
