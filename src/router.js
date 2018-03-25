import Vue from "vue";
import VueRouter from "vue-router";

import HomeComponent from "./components/Home.vue";
import TestComponent from "./components/Test.vue";

const Routes = [
  { path: "", component: HomeComponent },
  { path: "/home", component: HomeComponent },
  { path: "/", component: HomeComponent },
  { path: "/tests/:id", component: TestComponent }
];

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: Routes,
  mode: "history"
});
