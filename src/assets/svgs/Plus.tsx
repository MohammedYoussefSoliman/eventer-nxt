import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Plus({ size, color }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 12H18.5V13H13H12.5V13.5V19H11.5V13.5V13H11H5.5V12H11H11.5V11.5V6H12.5V11.5V12H13Z"
        fill={color || theme.colors.pallet[200]}
        stroke={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default Plus;
