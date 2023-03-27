import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticlepostView from "../views/ArticlepostView.vue";
import OurAppsView from "../views/OurAppsView.vue";
import O_AppPostview from "../views/O_AppPostView.vue";
import ProductsView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ProductDetailsView from "../views/ProductDetailsView";
import ErrorView from "../views/ErrorView.vue";
import ServerError from "../views/ServerError.vue";
import OrderNow from "../components/products/OrderNow.vue";
import O_MotionpostView from "../views/O_MotionpostView.vue";
import AppsView from "../views/AppsView";
import O_GraphicpostView from "../views/O_GraphicpostView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesView,
  },
  {
    path: "/article/:id",
    name: "article",
    component: ArticlepostView,
  },
  {
    path: "/ourworks",
    name: "ourwork",
    component: OurAppsView,
  },
  {
    path: "/Apps",
    name: "apps",
    component: AppsView,
  },
  {
    path: "/app/:id",
    name: "app",
    component: O_AppPostview,
  },
  {
    path: "/motion",
    name: "motion",
    component: O_MotionpostView,
  },
  {
    path: "/graphic",
    name: "graphic",
    component: O_GraphicpostView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/ordernow",
    name: "ordernow",
    component: OrderNow,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/details/:id",
    name: "details",
    component: ProductDetailsView,
  },
  {
    path: "/servererror",
    name: "servererror",
    component: ServerError,
  },
  {
    path: "/:catchAll(.*)",
    name: "errorpage",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
