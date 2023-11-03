import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { NormalLayout } from "@/layout";
import createRouteWithAuthRole from "./createRouteWithAuthRole";
import routes from "./routesConfig";

export default function RouterBuilder() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <NormalLayout>
        <Routes>
          {routes.map(createRouteWithAuthRole)}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </NormalLayout>
    </React.Suspense>
  );
}
