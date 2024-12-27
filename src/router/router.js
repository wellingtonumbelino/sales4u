import { createMemoryHistory, createRouter } from "vue-router";
import { lazyLoad } from "@utils/lazyload";

const routes = [
  { path: "/", component: lazyLoad("Home") },
  { path: "/product", component: lazyLoad("Product") },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
