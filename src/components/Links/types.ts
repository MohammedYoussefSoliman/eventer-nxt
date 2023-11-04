import { Property } from "csstype";
import React from "react";

export type LinkTypeProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  color?: Property.Color;
  callback?: () => void;
  relative?: boolean;
};
export type ButtonTypeProps = {
  children: React.ReactNode;
  className?: string;
  color?: Property.Color;
  onClick: () => void;
  disabled?: boolean;
};

export type GoBackProps = {
  callback?: () => void;
};

export type NavLinkTypeProps = {
  to: string;
  children: string;
  className?: string;
  relative?: boolean;
  setActive?: (activeName: string) => void;
};

export type DirectLinkTypeProps = {
  className?: string;
};
