import homePage from "../views/HomePage";
import IntraView from '../views/IntraPage';
import PostsView from '../views/PostsPage';
import AboutPage from '../views/AboutPage';
import EventsPage from '../views/EventsPage'
import BlogPage from '../views/BlogPage'
import CommonRegister from '../views/RegisterPage/CommonRegister'

const indexRoutes = [
  //sub routes
  { path: "/intra", name: "IntraView", component: IntraView },
  { path: "/posts", name: "PostsView", component: PostsView },
  { path: "/blog", name: "BlogPage", component: BlogPage },

  //main routes
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/events", name: "EventsPage", component: EventsPage },
  { path: "/register", name: "CommonRegister", component: CommonRegister },

  // home path must come last
  { path: "/", name: "homePage", component: homePage },
];

export default indexRoutes;
