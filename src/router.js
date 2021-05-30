import { createRouter, createWebHistory } from "vue-router";
import info from "@/pages/info.vue";
import contact from "@/pages/contact.vue";

const routes = [
  { path: "/", name: "info", component: info },
  { path: "/contact/", name: "contact", component: contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
