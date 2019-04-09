import PostView from '../views/PostsPage/Post'
import NoPostView from '../views/PostsPage/NoPost'

const postsRoutes = [
  { path: "/:postid", name: 'PostView', component: PostView},
  // home path must come last
  { path: "/", name: "NoPostView", component: NoPostView },
];

export default postsRoutes;