import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import ArticlesView from "../views/ArticlesView.vue";
// import ArticlepostView from "../views/ArticlepostView.vue";
// import OurAppsView from "../views/OurAppsView.vue";
import O_AppPostview from "../views/O_AppPostView.vue";
// import ProductsView from "../views/ProductsView.vue";
// import ServicesView from "../views/ServicesView.vue";
// import ProductDetailsView from "../views/ProductDetailsView";
import ErrorView from "../views/ErrorView.vue";
import ServerError from "../views/ServerError.vue";
// import OrderNow from "../components/products/OrderNow.vue";
// import O_MotionpostView from "../views/O_MotionpostView.vue";
// import AppsView from "../views/AppsView";
// import O_GraphicpostView from "../views/O_GraphicpostView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArticlesView.vue"),
  },
  {
    path: "/article/:id",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArticlepostView.vue"),
  },
  {
    path: "/ourworks",
    name: "ourwork",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OurAppsView.vue"),
  },
  {
    path: "/Apps",
    name: "apps",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AppsView.vue"),
  },
  {
    path: "/app/:id",
    name: "app",
    component: O_AppPostview,
  },
  {
    path: "/motion",
    name: "motion",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/O_MotionpostView.vue"),
  },
  {
    path: "/graphic",
    name: "graphic",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/O_GraphicpostView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsView.vue"),
  },
  {
    path: "/ordernow",
    name: "ordernow",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/products/OrderNow.vue"
      ),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServicesView.vue"),
  },
  {
    path: "/details/:id",
    name: "details",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetailsView.vue"),
  },
  {
    path: "/servererror",
    name: "servererror",
    component: ServerError,
  },
  {
    path: "/:catchAll(.*)*",
    name: "errorpage",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
