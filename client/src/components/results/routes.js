import Results from './main.vue'

let meta = {
  show_main_view: true,
  displayMainNav: true,
  displaySubNav: true,
  displayAdminNav: true,
  displayWidgetNav: false
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
