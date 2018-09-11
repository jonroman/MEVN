import Posts from './view/Posts.vue'
import NewPost from './view/NewPost.vue'
import EditPost from './view/EditPost.vue'

let meta = {
  displayMainNav: true,
  displayAdminNav: true,
  displayWidgetNav: true,
  subMenu: [
    {name: 'Home', href: '/', target: 'self'},
    {name: 'Posts', href: '/posts', target: 'self'},
    {name: 'New', href: '/posts/new', target: 'self'}
  ]
}

let routes = [
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta
  },
  {
    path: '/posts/new',
    name: 'New Post',
    component: NewPost,
    meta
  },
  {
    path: '/posts/:id',
    name: 'Edit Post',
    component: EditPost,
    meta
  }
]

export default routes
