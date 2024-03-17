import React from "react";
import { TooltipProps } from "@mui/material";
import withThemeProvider from "@/AppProvider/withThemeProvider";
import withMuiThemeProvider from "@/components/MuiThemeProvider/withMuiThemeProvider";
import useTooltipStyles from "./useTooltipStyles";

export interface Props extends TooltipProps {
  tooltipStyles?: {
    [key: string]: string | number;
  };
  arrowStyles?: {
    [key: string]: string | number;
  };
}

function ContentComponent({ children }: Pick<Props, "children">) {
  return children;
}
function TitleComponent({ title }: Pick<Props, "title">) {
  return <span>{title}</span>;
}

const Content = withThemeProvider<Pick<Props, "children">>(ContentComponent);

const TitleContent = withThemeProvider<Pick<Props, "title">>(TitleComponent);

function Tooltip({
  children,
  title,
  tooltipStyles,
  arrowStyles,
  ...rest
}: Props) {
  const toolTipTitle =
    typeof title === "string" ? title : <TitleContent title={title} />;

  const StyledTooltip = useTooltipStyles({ tooltipStyles, arrowStyles });

  if (!StyledTooltip) return null;

  return (
    <StyledTooltip title={toolTipTitle} {...rest}>
      <div style={{ width: "fit-content" }}>
        <Content>{children}</Content>
      </div>
    </StyledTooltip>
  );
}

export default withMuiThemeProvider<Props>(Tooltip);
