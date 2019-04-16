import homePage from "../views/HomePage";
import IntraView from '../views/IntraPage';
import PostsView from '../views/PostsPage';
import AboutPage from '../views/AboutPage';
import EventsPage from '../views/EventsPage'

const indexRoutes = [
  //sub routes
  { path: "/intra", name: "IntraView", component: IntraView },
  { path: "/posts", name: "PostsView", component: PostsView },

  //main routes
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/events", name: "EventsPage", component: EventsPage },

  // home path must come last
  { path: "/", name: "homePage", component: homePage },
];

export default indexRoutes;
