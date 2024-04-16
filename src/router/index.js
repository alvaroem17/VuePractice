import { createMemoryHistory, createWebHistory, createRouter } from "vue-router";

import Root from "../pages/Root.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Products from "../pages/Products.vue";
import Auth from "../pages/Auth.vue";
import OneProduct from "../pages/OneProduct.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

const routes = [
  {
    path: "/",
    component: Root,
    redirect: "home",
    children: [
      {
        path: "home",
        component: Home,
        name:"Home",
      },
      { 
        path: "about", 
        component: About,
        name:"About",
      },
      { 
        path: "products", 
        component: Products,
        name:"Products",
      }
      ,{
        path: "products/:id",
        component: OneProduct,
        name:"Product",
      }
    ],
  },{
    path: "/auth",
    component: Auth,
    children: [
      {
        path: "login",
        component: Login,
        name:"Login",
      },
      { 
        path: "signup", 
        component: Signup,
        name:"Signup",
      }
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
