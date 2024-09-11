import Home from "./Home.vue";
import Index from "./index.vue";
import Profile from "./Profile.vue";

export const mainRoutes = [
  {
    path: "/",
    component: Index,
    redirect: "/home",
    children: [
      { path: "/home", component: Home },
      {
        path: "/profile",
        component: Profile,
      },
    ],
  },
];
