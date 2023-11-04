import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Circle({ size, color }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="3" fill={color || theme.colors.pallet[200]} />
    </svg>
  );
}

export default Circle;
