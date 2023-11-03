// public routes
import homeRoutes from "@/modules/home/routes";

import resolveRoutingConfig from "./resolveRoutingConfig";
import { RouteType } from "./types";

const routes: RouteType[] = [...homeRoutes];

export default resolveRoutingConfig(routes, []);
