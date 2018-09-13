import Home from './main.vue'

let meta = {
  show_main_view: true,
  displayMainNav: true,
  displaySubNav: true,
  displayAdminNav: false,
  displayWidgetNav: false,
  subMenu: []
}

let routes = [
  {
    path: '/',
    name: 'myDSTI',
    meta,
    component: Home
  }
]

export default routes
