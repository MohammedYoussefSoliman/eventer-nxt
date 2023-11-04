import CSS from "csstype";
import { useLocalTheme } from "@/hooks";
import MuiCircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import withMuiThemeProvider from "@/components/MuiThemeProvider/withMuiThemeProvider";
import SpinnerWrapper from "./styles";

interface SpinnerProps extends CircularProgressProps {
  bottomColor?: CSS.Property.Color;
  topColor?: CSS.Property.Color;
  margin?: CSS.Property.Padding;
}

function Spinner(props: SpinnerProps) {
  const { bottomColor, topColor, margin, size = 25, ...rest } = props;

  const { colors } = useLocalTheme();

  return (
    <SpinnerWrapper wrapperPadding={margin} size={`${size}px`}>
      <MuiCircularProgress
        variant="determinate"
        sx={{
          color: bottomColor || colors.pallet[400],
          animationDuration: "900ms",
          position: "absolute",
          left: 0,
        }}
        size={size}
        thickness={5}
        value={100}
        {...rest}
      />
      <MuiCircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: topColor || colors.pallet[200],
          animationDuration: "900ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={size}
        thickness={5}
        {...rest}
      />
    </SpinnerWrapper>
  );
}

export default withMuiThemeProvider<SpinnerProps>(Spinner);
