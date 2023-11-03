import { css } from "@emotion/react";
import { Property } from "csstype";
import devices from "@/theme/sizes";
import { FontSizeType, HoverType } from "./types";

export const configureTruncation = (truncationWidth: Property.Width) => css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: ${truncationWidth};
`;

export const configureAdornment = (
  content: string,
  direction: "before" | "after"
) => {
  if (direction === "before") {
    return css`
      &::before {
        content: "${content}";
        position: relative;
        right: "0.5ch";
      }
    `;
  }
  return css`
    &::after {
      content: "${content}";
      position: relative;
      left: "0.5ch";
    }
  `;
};

export const manageFontSize = (
  fontSize: FontSizeType,
  length: number
): FontSizeType => {
  let fontSizeRatio = 1;
  // this handles the font size of headers in case the text length increased
  if (length > 30 && length < 45) fontSizeRatio = 0.85;
  if (length >= 45) fontSizeRatio = 0.7;

  if (fontSize instanceof Object) {
    const fontSizeKeys = Object.keys(fontSize);
    const fontSizeValues = Object.values(fontSize);
    let managedFontSize = {};
    fontSizeKeys.forEach((key, index) => {
      managedFontSize = {
        ...managedFontSize,
        [key]: `calc(${fontSizeValues[index]} * ${fontSizeRatio})`,
      };
    });
    return managedFontSize as FontSizeType;
  }
  return `calc(${fontSize} * ${fontSizeRatio})`;
};

export const configureFontSize = (fontSize: FontSizeType) => {
  if (fontSize instanceof Object) {
    const keys = Object.keys(fontSize) as Array<keyof typeof devices>;
    let stylesObject = {
      fontSize: fontSize.xs,
    };
    keys.forEach((key) => {
      stylesObject = {
        ...stylesObject,
        [devices[key]]: {
          fontSize: fontSize[key],
        },
      };
    });
    return css(stylesObject);
  }
  return css`
    font-size: ${fontSize};
  `;
};

export const configureHover = (hoverStyles: HoverType) => css`
  &:hover {
    text-decoration: ${hoverStyles.decoration};
    color: ${hoverStyles.color};
    font-weight: ${hoverStyles.fontWeight};
  }
`;
