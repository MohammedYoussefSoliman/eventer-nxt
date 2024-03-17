import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

export type TooltipProps = {
  tip: React.ReactNode;
  children: React.ReactNode;
  providerProps?: Tooltip.TooltipProviderProps;
  rootProps?: Tooltip.PortalProps;
  triggerProps?: Tooltip.TooltipTriggerProps;
  contentProps?: Tooltip.TooltipContentProps;
  portalProps?: Tooltip.PortalProps;
};
