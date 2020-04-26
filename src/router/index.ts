import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";


Vue.use(VueRouter);

/* const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",

  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ /*"../views/About.vue")
  }
]; */

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
