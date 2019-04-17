import BlogPagination from '../views/BlogPage/BlogPagination'
import BlogSearch from '../views/BlogPage/BlogSearch'

const blogRoutes = [
  { path: "/page/:page", name: "BlogPagination", component: BlogPagination },
  { path: '/search/:query', name: 'BlogSearch', component: BlogSearch},
  // home path must come last
  // { path: "/", name: "IntraView", component: IntraView },
];

export default blogRoutes;
