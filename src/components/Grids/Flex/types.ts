import CSS from "csstype";
import React from "react";

export type Spacing =
  | "m"
  | "mv"
  | "mh"
  | "mt"
  | "mb"
  | "ml"
  | "mr"
  | "ms"
  | "me"
  | "p"
  | "pv"
  | "ph"
  | "pt"
  | "pb"
  | "pl"
  | "pr"
  | "ps"
  | "pe";

export enum SpacingProperties {
  m = "margin",
  mt = "marginTop",
  mb = "marginBottom",
  ml = "marginLeft",
  mr = "marginRight",
  mv = "marginBlock",
  mh = "marginInline",
  ms = "marginInlineStart",
  me = "marginInlineEnd",
  p = "padding",
  pt = "paddingTop",
  pb = "paddingBottom",
  pl = "paddingLeft",
  pr = "paddingRight",
  pv = "paddingBlock",
  ph = "paddingInline",
  ps = "paddingInlineStart",
  pe = "paddingInlineEnd",
}

export type ResponsiveSpacingType = {
  xs: number | CSS.Property.Padding | CSS.Property.Margin;
  sm?: number | CSS.Property.Padding | CSS.Property.Margin;
  md?: number | CSS.Property.Padding | CSS.Property.Margin;
  lg?: number | CSS.Property.Padding | CSS.Property.Margin;
  xl?: number | CSS.Property.Padding | CSS.Property.Margin;
  xxl?: number | CSS.Property.Padding | CSS.Property.Margin;
  hd?: number | CSS.Property.Padding | CSS.Property.Margin;
};

export type ResponsiveCSSPropertyType<T> = {
  xs: number | string | T;
  sm?: number | string | T;
  md?: number | string | T;
  lg?: number | string | T;
  xl?: number | string | T;
  xxl?: number | string | T;
  hd?: number | string | T;
};

export type StyleValue<T> = ResponsiveCSSPropertyType<T> | number | string;

export type ResponsiveDirectionType = {
  xs: number | CSS.Property.FlexDirection;
  sm?: number | CSS.Property.FlexDirection;
  md?: number | CSS.Property.FlexDirection;
  lg?: number | CSS.Property.FlexDirection;
  xl?: number | CSS.Property.FlexDirection;
  xxl?: number | CSS.Property.FlexDirection;
  hd?: number | CSS.Property.FlexDirection;
};

export type DirectionType =
  | number
  | CSS.Property.FlexDirection
  | ResponsiveDirectionType;

export type SpacingProperty =
  | number
  | CSS.Property.Padding
  | CSS.Property.Margin
  | ResponsiveSpacingType;

export type SpacingType = {
  [key in Spacing]?: SpacingProperty;
};

export type FlexPropsType = {
  children: React.ReactNode;
  width?: StyleValue<CSS.Property.Width>;
  basis?: string;
  height?: StyleValue<CSS.Property.Height>;
  direction?: StyleValue<CSS.Property.FlexDirection>;
  justify?: StyleValue<CSS.Property.JustifyContent>;
  align?: StyleValue<CSS.Property.AlignItems>;
  gap?: StyleValue<CSS.Property.Gap>;
  flex?: StyleValue<CSS.Property.Flex>;
  fullWidth?: boolean;
  fullHeight?: boolean;
  withWrap?: boolean;
  maxWidth?: StyleValue<CSS.Property.MaxWidth>;
  minWidth?: CSS.Property.MinWidth;
  className?: string;
  as?: React.ElementType;
} & SpacingType;

export type StyledFlexWrapper = Omit<FlexPropsType, "children" | "as">;
