import { h } from "vue";
import { RouterView, type RouteRecordRaw } from "vue-router";


const Home = () => import("@/views/HomeView.vue");
const UsersView = () => import("@/views/Users/UsersView.vue");
const UserView = () => import("@/views/Users/UserView.vue");

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
    component: {
      render() {
        return h(RouterView);
      },
    },
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        name: "Users",
        component: UsersView,
      },
      {
        path: "/users/:id",
        name: "User",
        component: UserView,
        props: true,
      },
    ],
  },
];

export { PublicRoutes };
