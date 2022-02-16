import type { RouteRecordRaw } from "vue-router";

const Home = () => import("@/views/HomeView.vue");
const UsersView = () => import("@/views/Users/UsersView.vue");

const PublicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/users",
    name: "Users",
    component: UsersView,
    meta: {
      requiresAuth: false,
    },
  },
];

export { PublicRoutes };
