import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

import { TooltipContent, TriggerButton, TooltipArrow } from "./Tooltip.styles";

import type { TooltipProps } from "./Tooltip.types";

export default function RadixTooltip({
  tip,
  children,
  providerProps,
  rootProps,
  triggerProps,
  contentProps,
  portalProps,
}: TooltipProps) {
  return (
    <Tooltip.Provider {...providerProps}>
      <Tooltip.Root {...rootProps}>
        <Tooltip.Trigger asChild {...triggerProps}>
          <TriggerButton>{children}</TriggerButton>
        </Tooltip.Trigger>
        <Tooltip.Portal {...portalProps}>
          <TooltipContent sideOffset={5} {...contentProps}>
            {tip}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
