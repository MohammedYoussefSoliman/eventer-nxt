import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function Home({ size, color, dataTest }: SVGprop) {
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
        d="M7.76467 16.9412H9.88232H14.1176H16.2353V10.5882L12 7.41177L7.76467 10.5882V16.9412ZM6.35291 18.3529V9.88236L12 5.64706L17.647 9.88236V18.3529H12.7058H11.2941H6.35291Z"
        fill={color || theme.colors.pallet[200]}
      />
    </svg>
  );
}

export default Home;
