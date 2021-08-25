import { createWebHistory, createRouter } from "vue-router";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";
const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;