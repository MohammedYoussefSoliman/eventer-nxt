import React from "react";

export type CardProps = {
  content: React.ReactNode;
  heading: string;
  helperText?: string;
  onClick: () => void;
  onCount: (value: number) => void;
};
