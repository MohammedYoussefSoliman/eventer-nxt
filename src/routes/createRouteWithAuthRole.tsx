import React from "react";
import { Route } from "react-router-dom";
import AuthRoles from "@/modules/auth/AuthRoles";
import { useAuth } from "@/hooks";
import { ConfiguredRoutes } from "./types";

export default function createRouteWithAuthRole({
  role,
  children,
}: ConfiguredRoutes) {
  return (
    <Route key={role} element={<AuthRoles role={role} />}>
      {children.map(({ Element, route, guard }) => {
        const { loggedIn } = useAuth();
        return guard ? (
          <Route
            key={`${role}-${route}`}
            path={route}
            element={loggedIn ? <Element.User /> : <Element.Visitor />}
          />
        ) : null;
      })}
    </Route>
  );
}
