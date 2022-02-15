import type { RouteRecordRaw } from "vue-router";

const Home = () => import("@/views/HomeView.vue");

const PublicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
];

export { PublicRoutes };
