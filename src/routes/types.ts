import React from "react";
import { LayoutType } from "@/layout/types";

export type RouteType = {
  role?: string | string[];
  withParentRoute?: boolean;
  guards?: Array<boolean>;
  route: string;
  element:
    | Promise<any>
    | {
        user: Promise<any>;
        visitor: Promise<any>;
      };
};

export type ElementType = {
  User: React.ComponentType<unknown>;
  Visitor: React.ComponentType<unknown>;
};

export type ConfiguredRoutes = {
  role: string;
  children: {
    Element: ElementType;
    guard: boolean;
    route: string;
    layout: {
      user: LayoutType;
      visitor: LayoutType;
    };
  }[];
};
