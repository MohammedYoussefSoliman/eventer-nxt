import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Watch({ size, color }: SVGprop) {
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
        d="M8.75 17.5L12 14.3222L15.25 17.5L17 15.7889L13.75 12.6111L17 9.43333L15.25 7.72222L12 10.9L8.75 7.72222L7 9.43333L10.25 12.6111L7 15.7889L8.75 17.5ZM5.75 23C5.0625 23 4.47417 22.7609 3.985 22.2826C3.495 21.8034 3.25 21.2278 3.25 20.5556V4.66667H2V2.22222H8.25V1H15.75V2.22222H22V4.66667H20.75V20.5556C20.75 21.2278 20.5054 21.8034 20.0163 22.2826C19.5263 22.7609 18.9375 23 18.25 23H5.75ZM18.25 4.66667H5.75V20.5556H18.25V4.66667Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default Watch;
