import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Notification({ size, color, dataTest }: SVGprop) {
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
        d="M16.733 16.0497L17.8381 17.1579H6.15565L7.26073 16.0497L7.53438 15.7753V15.3877V10.8749C7.53438 8.42003 8.80092 6.57293 10.8636 6.08282L11.5844 5.91156V5.17071V4.55697C11.5844 4.32309 11.7702 4.14062 11.9969 4.14062C12.2236 4.14062 12.4094 4.32309 12.4094 4.55697V5.17071V5.91096L13.1294 6.08265C15.1844 6.57264 16.4594 8.42989 16.4594 10.8749V15.3877V15.7753L16.733 16.0497Z"
        stroke={color || theme.colors.pallet[0]}
        strokeWidth="1.875"
      />
    </svg>
  );
}

export default Notification;
