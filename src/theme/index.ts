import { pallet, text } from "./colors";
import { ThemeType } from "./types";

const getTheme = (): ThemeType => ({
  font: "roboto",
  colors: {
    pallet,
    text,
  },
});

export default getTheme;
