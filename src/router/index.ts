import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import { PrivateRoutes } from "@/router/PrivateRoutes";
import { PublicRoutes } from "@/router/PublicRoutes";


const routes: RouteRecordRaw[] = [...PrivateRoutes, ...PublicRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
