import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function ChevronDown({ size, color, dataTest }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      width={size || "16"}
      height={size || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={dataTest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.46967 5.46967C2.76256 5.17678 3.23744 5.17678 3.53033 5.46967L8 9.93934L12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967C13.8232 5.76256 13.8232 6.23744 13.5303 6.53033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L2.46967 6.53033C2.17678 6.23744 2.17678 5.76256 2.46967 5.46967Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default ChevronDown;
