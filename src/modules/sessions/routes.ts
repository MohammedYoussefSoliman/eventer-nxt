import { RouteType } from "@/routes/types";

const routes: RouteType[] = [
  {
    route: "/sessions",
    element: import("@/modules/sessions/pages/Sessions"),
  },
  {
    route: "/create-session",
    element: import("@/modules/sessions/pages/CreateSession"),
  },
];

export default routes;
