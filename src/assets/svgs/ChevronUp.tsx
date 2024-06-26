import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function ChevronUp({ size, color, dataTest }: SVGprop) {
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
        d="M7.21967 5.21967C7.51256 4.92678 7.98744 4.92678 8.28033 5.21967L13.2803 10.2197C13.5732 10.5126 13.5732 10.9874 13.2803 11.2803C12.9874 11.5732 12.5126 11.5732 12.2197 11.2803L7.75 6.81066L3.28033 11.2803C2.98744 11.5732 2.51256 11.5732 2.21967 11.2803C1.92678 10.9874 1.92678 10.5126 2.21967 10.2197L7.21967 5.21967Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default ChevronUp;
