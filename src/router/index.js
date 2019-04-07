import homePage from "../views/HomePage";
import IntraView from '../views/IntraPage';
import PostsView from '../views/PostsPage';

const indexRoutes = [
  { path: "/intra", name: "IntraView", component: IntraView },
  { path: "/posts", name: "PostsView", component: PostsView },

  // home path must come last
  { path: "/", name: "homePage", component: homePage },
];

export default indexRoutes;
