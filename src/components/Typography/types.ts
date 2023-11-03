import React from "react";
import { Property } from "csstype";
import { ResponsiveSettings } from "@/theme/types";

export type FontSizeType = ResponsiveSettings | Property.FontSize;

export type HoverType = {
  decoration?: Property.TextDecoration;
  color?: Property.Color;
  fontWeight?: Property.FontWeight;
};

export type TypographyProps = {
  text?: string | number;
  children?: React.ReactNode;
  fontSize?: FontSizeType;
  fontFamily?: Property.FontFamily;
  weight?: number;
  color?: Property.Color;
  textDecoration?: Property.TextDecoration;
  textAlign?: Property.TextAlign;
  lineHeight?: Property.LineHeight;
  isHeader?: boolean;
  direction?: Property.Direction;
  truncationWidth?: Property.Width;
  capitalizeFirstLetter?: boolean;
  uppercase?: boolean;
  startAdornment?: string;
  className?: string;
  endAdornment?: string;
  hover?: HoverType;
  noTrans?: boolean;
  as?: React.ElementType;
};

export type TypographicConfig =
  | "fontSize"
  | "weight"
  | "lineHeight"
  | "as"
  | "isHeader";

export type StyledTextType = Omit<
  TypographyProps,
  "text" | "as" | "className" | "noTrans"
> & {
  length?: number;
};
