import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function User({ size, color, dataTest }: SVGprop) {
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
        d="M17.647 18.3529V16.9412C17.647 16.1923 17.3495 15.4742 16.82 14.9446C16.2905 14.4151 15.5723 14.1176 14.8235 14.1176H9.17643C8.42759 14.1176 7.70941 14.4151 7.1799 14.9446C6.65038 15.4742 6.35291 16.1923 6.35291 16.9412V18.3529"
        stroke={color || theme.colors.pallet[200]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.2941C13.5594 11.2941 14.8236 10.03 14.8236 8.47059C14.8236 6.9112 13.5594 5.64706 12 5.64706C10.4407 5.64706 9.17651 6.9112 9.17651 8.47059C9.17651 10.03 10.4407 11.2941 12 11.2941Z"
        stroke={color || theme.colors.pallet[200]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default User;
