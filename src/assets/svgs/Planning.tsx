import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Calendar({ size, color }: SVGprop) {
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
        d="M6.75002 18.5198C6.36179 18.5198 6.02932 18.3816 5.75261 18.1054C5.47637 17.8287 5.33826 17.4962 5.33826 17.108V7.22564C5.33826 6.83741 5.47637 6.50517 5.75261 6.22894C6.02932 5.95223 6.36179 5.81388 6.75002 5.81388H7.4559V4.40211H8.86767V5.81388H14.5147V4.40211H15.9265V5.81388H16.6324C17.0206 5.81388 17.3531 5.95223 17.6298 6.22894C17.906 6.50517 18.0441 6.83741 18.0441 7.22564V11.4609H16.6324V10.0492H6.75002V17.108H11.6912V18.5198H6.75002ZM18.8383 14.9904L17.3383 13.4904L17.85 12.9786C17.9794 12.8492 18.1441 12.7845 18.3441 12.7845C18.5441 12.7845 18.7088 12.8492 18.8383 12.9786L19.35 13.4904C19.4794 13.6198 19.5441 13.7845 19.5441 13.9845C19.5441 14.1845 19.4794 14.3492 19.35 14.4786L18.8383 14.9904ZM13.103 19.2256V17.7256L16.8441 13.9845L18.3441 15.4845L14.603 19.2256H13.103ZM6.75002 8.63741H16.6324V7.22564H6.75002V8.63741Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default Calendar;
