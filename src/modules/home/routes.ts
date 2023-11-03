import { RouteType } from "@/routes/types";

const routes: RouteType[] = [
  {
    route: "/",
    element: import("@/modules/home/Page"),
  },
];

export default routes;
