import { RouteType } from "@/routes/types";

const routes: RouteType[] = [
  {
    route: "/sessions",
    element: import("@/modules/sessions/Page"),
  },
];

export default routes;
