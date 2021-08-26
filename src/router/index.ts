import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/index.vue";
import Login from "../views/Login/index.vue";
import Register from "../views/Register/index.vue";
import Search from "../views/Search/index.vue";
import Detail from "../views/Detail/index.vue";
import AddCartSuccess from "../views/AddCartSuccess/index.vue";
import ShopCart from "../views/ShopCart/index.vue";
import Center from "../views/Center/index.vue";
import Pay from "../views/Pay/index.vue";
import PaySuccess from "../views/PaySuccess/index.vue";
import Trade from "../views/Trade/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/search/:keyword?",
    name: "Search",
    component: Search,
  },
  {
    path: "/detail/:id?",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/addcartsuccess",
    name: "AddCartSuccess",
    component: AddCartSuccess,
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    component: ShopCart,
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade,
  },
  {
    path: "/paySuccess",
    name: "PaySuccess",
    component: PaySuccess,
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
  },
  {
    path: "/center",
    name: "Center",
    component: Center,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
