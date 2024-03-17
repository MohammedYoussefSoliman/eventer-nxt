import { css, keyframes } from "@emotion/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "@emotion/styled";

const slideUpAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateY(2px);
  }
    to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
    from {
    opacity: 0;
    transform: translateX(-2px);
  }
    to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
   from {
    opacity: 0;
    transform: translateY(-2px);
  }
    to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
   from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TriggerButton = styled.button`
  all: unset;
  height: fit-content;
  width: fit-content;
`;

export const TooltipContent = styled(Tooltip.Content)(
  ({
    theme: {
      colors: { pallet },
    },
  }) => css`
    label: tooltip-content;
    border-radius: 4px;
    padding: 4px 8px;
    background-color: ${pallet[500]};
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state="delayed-open"] {
      &[data-side="top"] {
        animation-name: ${slideDownAndFade};
      }
    }
    &[data-state="delayed-open"] {
      &[data-side="right"] {
        animation-name: ${slideLeftAndFade};
      }
    }
    &[data-state="delayed-open"] {
      &[data-side="left"] {
        animation-name: ${slideRightAndFade};
      }
    }
    &[data-state="delayed-open"] {
      &[data-side="bottom"] {
        animation-name: ${slideUpAndFade};
      }
    }
  `
);
export const TooltipArrow = styled(Tooltip.Arrow)(
  ({
    theme: {
      colors: { pallet },
    },
  }) => css`
    label: tooltip-arrow;
    fill: ${pallet[500]};
  `
);
