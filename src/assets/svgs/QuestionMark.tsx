import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function QuestionMark({ size, color, dataTest }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      width={size || "20"}
      height={size || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={dataTest}
    >
      <circle
        cx="9.9974"
        cy="9.9974"
        r="7.83333"
        stroke={color || theme.colors.pallet[200]}
      />
      <path
        d="M10.5966 11.6099H9.18147C9.18516 11.2739 9.21106 10.9845 9.25916 10.7419C9.31095 10.4954 9.39789 10.2733 9.51998 10.0754C9.64576 9.87753 9.81225 9.68152 10.0194 9.48737C10.1933 9.33056 10.345 9.18122 10.4745 9.03934C10.604 8.89747 10.7057 8.75186 10.7797 8.60251C10.8537 8.44944 10.8907 8.27956 10.8907 8.09288C10.8907 7.87633 10.8574 7.69712 10.7908 7.55525C10.7279 7.40964 10.6317 7.2995 10.5022 7.22483C10.3764 7.15016 10.2174 7.11282 10.025 7.11282C9.86589 7.11282 9.71791 7.14829 9.58102 7.21923C9.44414 7.28643 9.3313 7.39097 9.24251 7.53285C9.15742 7.67472 9.11302 7.8614 9.10932 8.09288H7.5C7.5111 7.58138 7.62764 7.15949 7.84961 6.8272C8.07529 6.49118 8.3768 6.2429 8.75416 6.08235C9.13152 5.91808 9.55512 5.83594 10.025 5.83594C10.5429 5.83594 10.9869 5.92181 11.3568 6.09355C11.7268 6.26156 12.0098 6.50985 12.2059 6.8384C12.402 7.16322 12.5 7.55898 12.5 8.02568C12.5 8.3505 12.4371 8.63985 12.3113 8.89373C12.1855 9.14388 12.0209 9.37723 11.8174 9.59378C11.6139 9.81033 11.3901 10.0343 11.1459 10.2658C10.9351 10.4562 10.7908 10.656 10.7131 10.8651C10.6391 11.0741 10.6003 11.3224 10.5966 11.6099ZM9.01498 13.3404C9.01498 13.1015 9.09637 12.9036 9.25916 12.7468C9.42194 12.5862 9.64021 12.506 9.91398 12.506C10.1841 12.506 10.4005 12.5862 10.5633 12.7468C10.7297 12.9036 10.813 13.1015 10.813 13.3404C10.813 13.5719 10.7297 13.7679 10.5633 13.9285C10.4005 14.089 10.1841 14.1693 9.91398 14.1693C9.64021 14.1693 9.42194 14.089 9.25916 13.9285C9.09637 13.7679 9.01498 13.5719 9.01498 13.3404Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default QuestionMark;
