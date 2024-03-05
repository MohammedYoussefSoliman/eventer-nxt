import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Calendar({ size, color, dataTest }: SVGprop) {
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
        d="M18.3 4.31818V4.81818H18.8H19.7C20.4091 4.81818 21 5.40776 21 6.13636V20.6818C21 21.4104 20.4091 22 19.7 22H5.3C4.59087 22 4 21.4104 4 20.6818V6.13636C4 5.40776 4.59087 4.81818 5.3 4.81818H6.2H6.7V4.31818V3H7.5V4.31818V4.81818H8H17H17.5V4.31818V3H18.3V4.31818ZM19.7 21.1818H20.2V20.6818V8.86364V8.36364H19.7H5.3H4.8V8.86364V20.6818V21.1818H5.3H19.7Z"
        fill={color || theme.colors.pallet[200]}
        stroke={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default Calendar;
