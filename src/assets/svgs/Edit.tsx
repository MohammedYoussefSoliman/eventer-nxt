import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Edit({ size, color }: SVGprop) {
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
        d="M4.18866 20.3082H5.72072L15.1593 10.8562L13.6272 9.32192L4.18866 18.774V20.3082ZM19.8376 9.26712L15.1867 4.66438L16.7187 3.13014C17.1382 2.71005 17.6536 2.5 18.265 2.5C18.8756 2.5 19.3907 2.71005 19.8102 3.13014L21.3423 4.66438C21.7618 5.08447 21.9806 5.59151 21.9989 6.18548C22.0171 6.77872 21.8165 7.28539 21.397 7.70548L19.8376 9.26712ZM18.2508 10.8836L6.6509 22.5H2V17.8425L13.5999 6.22603L18.2508 10.8836Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default Edit;
