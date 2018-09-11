import Admin from './main.vue'

let meta = {
  displayMainNav: true,
  displayAdminNav: true,
  displayWidgetNav: true,
  subMenu: []
}

let routes = [
  {
    path: '/admin',
    name: 'Admin',
    meta,
    component: Admin
  }
]

export default routes
