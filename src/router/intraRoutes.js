// import IntraView from '../views/IntraPage'
import LoginView from '../views/LoginPage'
import NewPostsView from '../views/NewPostPage'

const intraRoutes = [
  { path: "/login", name: "LoginView", component: LoginView },
  { path: '/newpost', name: 'NewPostsView', component: NewPostsView},
  // home path must come last
  // { path: "/", name: "IntraView", component: IntraView },
];

export default intraRoutes;
