/* eslint-disable no-nested-ternary */
import React from "react";
import _ from "lodash";

import { RouteType, ConfiguredRoutes, ElementType } from "./types";

const resolveGuards = (guards: Array<boolean> | undefined = [true]): boolean =>
  guards.some((guard) => guard !== false);

const resolveElement = (element: RouteType["element"]): ElementType => {
  if (element instanceof Promise) {
    return {
      User: React.lazy(() => element),
      Visitor: React.lazy(() => element),
    };
  }
  return {
    User: React.lazy(() => element.user),
    Visitor: React.lazy(() => element.visitor),
  };
};

const appendRoute = (route: RouteType, configs: ConfiguredRoutes[]) => {
  const roles =
    !route.role || _.isEmpty(route.role)
      ? ["public"]
      : _.isString(route.role)
      ? [route.role]
      : [...route.role];

  const currentConfig: ConfiguredRoutes[] = [...configs];

  roles.forEach((role) => {
    let currentRoleGroup = currentConfig.find((config) => config.role === role);
    const currentRoleGroupIndex = currentConfig.findIndex(
      (config) => config.role === role
    );
    if (!currentRoleGroup) {
      currentConfig.push({
        role,
        children: [
          {
            Element: resolveElement(route.element),
            guard: resolveGuards(route.guards),
            layout: {
              user: "normal",
              visitor: "normal",
            },
            route: route.withParentRoute
              ? `/${_.trim(role)}/${_.trim(route.route, "/")}`
              : `/${_.trim(route.route, "/")}`,
          },
        ],
      });
    } else {
      currentRoleGroup = {
        ...currentRoleGroup,
        role,
        children: [
          ...currentRoleGroup.children,
          {
            Element: resolveElement(route.element),
            guard: resolveGuards(route.guards),
            layout: {
              user: "normal",
              visitor: "normal",
            },
            route: route.withParentRoute
              ? `/${_.trim(role)}/${_.trim(route.route, "/")}`
              : `/${_.trim(route.route, "/")}`,
          },
        ],
      };
      currentConfig[currentRoleGroupIndex] = currentRoleGroup;
    }
  });

  return currentConfig;
};

const resolveRoutingConfig = (
  routes: RouteType[],
  config: ConfiguredRoutes[]
): ConfiguredRoutes[] => {
  let currentConfigs: ConfiguredRoutes[] = [...config];
  if (routes.length <= 0) {
    return currentConfigs;
  }

  const currentRoute = routes[0];

  currentConfigs = [...appendRoute(currentRoute, config)];
  return resolveRoutingConfig(routes.slice(1), currentConfigs);
};

export default resolveRoutingConfig;
