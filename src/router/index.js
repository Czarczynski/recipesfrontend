import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import BrowseRecipe from "../views/RecipesSearch";
import Login from "../views/Login";
import Recipe from "../views/Recipe";
import Profile from "../views/Profile";
import Favourites from "../views/Favourites";
import History from "../views/History";
import PageNotFound from "../views/404";
Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/recipes",
    props: true,
    name: "Browse Recipe",
    component: BrowseRecipe,
  },
  {
    path: "/login",
    props: true,
    name: "Login",
    component: Login,
  },
  {
    path: "/login/:isRegister",
    props: true,
    name: "Register",
    component: Login,
  },
  {
    path: "/recipes/:id",
    props: true,
    name: "Recipe",
    component: Recipe,
  },
  {
    path: "/profile",
    props: true,
    name: "Profile",
    component: Profile,
  },
  {
    path: "/favourites",
    props: true,
    name: "Favourites",
    component: Favourites,
  },
  {
    path: "/history",
    props: true,
    name: "History",
    component: History,
  },
  { path: "*", component: PageNotFound },
];

export default new Router({
  mode: "history",
  routes,
});
