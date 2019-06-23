// import IntraView from '../views/IntraPage'
import LoginView from '../views/LoginPage'
import NewPostsView from '../views/NewPostPage'
import NewEventsView from '../views/NewEventPage'
import SettingsView from '../views/SettingsPage'

const intraRoutes = [
  { path: "/login", name: "LoginView", component: LoginView },
  { path: '/newpost', name: 'NewPostsView', component: NewPostsView},
  { path: '/newevent', name: 'NewEventsView', component: NewEventsView},
  { path: '/settings', name: 'SettingsView', component: SettingsView},
  // home path must come last
  // { path: "/", name: "IntraView", component: IntraView },
];

export default intraRoutes;
