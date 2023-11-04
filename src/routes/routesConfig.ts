// public routes
import homeRoutes from "@/modules/home/routes";
import sessionsRoutes from "@/modules/sessions/routes";

import resolveRoutingConfig from "./resolveRoutingConfig";
import { RouteType } from "./types";

const routes: RouteType[] = [...homeRoutes, ...sessionsRoutes];

export default resolveRoutingConfig(routes, []);
