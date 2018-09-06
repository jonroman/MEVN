import Home from './main.vue'

let meta = {
  show_main_view: true,
  displayMainNav: true,
  displaySubNav: true,
  displayAdminNav: false,
  displayWidgetNav: false
}

let routes = [
  {
    path: '/',
    name: 'HomePage',
    meta,
    component: Home
  }
]

export default routes
