/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

let allRoutes = [];
// Home routes
import {default as HomeRoutes} from '../components/home/routes'
allRoutes = allRoutes.concat(HomeRoutes);

// Admin routes
import {default as AdminRoutes} from '../components/admin/routes'
allRoutes = allRoutes.concat(AdminRoutes);

// Posts routes
import {default as PostsRoutes} from '../components/posts/routes'
allRoutes = allRoutes.concat(PostsRoutes);

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: allRoutes
})
