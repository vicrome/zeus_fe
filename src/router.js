import HomeView from "@/views/HomeView.vue";
import ManagmentView from "@/views/ManagmentView.vue";
import TripView from "@/views/TripView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/trip/:tripid",
    name: "Trip",
    component: TripView,
  },
  {
    path: "/manage",
    name: "Manage",
    component: ManagmentView,
  },
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log($route.params.slug);
  document.title = "Proyect Zeus || " + to.name;
  next();
});

export default router;
