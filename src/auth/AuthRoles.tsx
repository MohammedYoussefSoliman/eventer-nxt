import React from "react";
import { useAppSelector, useAuth } from "@/hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom";

type Props = {
  role: string;
};

export default function AuthRoles({ role }: Props) {
  const auth = useAppSelector((state) => state.auth);
  const { loggedIn } = useAuth();
  const { user } = auth;
  const location = useLocation();
  const currentRole = loggedIn
    ? user.roles.includes(role) || role === "public"
    : "public";
  const guard: boolean = Boolean(currentRole);

  if (!guard)
    return <Navigate to="/access-denied" state={{ from: location }} replace />;

  return <Outlet />;
}
