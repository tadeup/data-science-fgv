import homePage from "../views/HomePage";
import loginPage from "../views/LoginPage";
import formPage from "../views/FormPage";
import dashboardPage from "../views/DashboardPage"

const indexRoutes = [
  { path: "/form", name: "formPage", component: formPage },
  { path: "/dashboard", name: "dashboardPage", component: dashboardPage },
  { path: "/login", name: "loginPage", component: loginPage },

  // home path must come last
  { path: "/", name: "homePage", component: homePage },
];

export default indexRoutes;
