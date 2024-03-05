import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Times({ size, color, dataTest }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={dataTest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8177 12.9104L6.71109 18.017L5.29688 16.6028L10.4035 11.4962L5.61058 6.70328L7.0248 5.28906L11.8177 10.082L16.6106 5.28906L18.0248 6.70328L13.2319 11.4962L18.3385 16.6028L16.9243 18.017L11.8177 12.9104Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default Times;
