import Results from './main.vue'

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
    path: '/results/:criteria',
    name: 'Results',
    meta,
    component: Results
  }
]

export default routes
