<template>
  <div id="app" class=".container-fluid dsti-grey-bg">
    <!-- MAIN MENU -->
    <div class="row no-gutters">
      <!-- SHOW ADMIN and Main Menu -->
      <div class="col-2" v-if="show_admin_view">
        <v-adminMenu />
      </div>
      <div class="col-10" v-if="show_admin_view">
        <v-mainMenu />
        <v-mainMenuSub class="sub-main-menu-large dsti-white-bg" />
        <v-AdminToolsView /> <!-- nested -->
      </div>
      <div class="col-12" v-if="show_main_view">
        <v-mainMenu />
      </div>
    </div>

    <!-- SUB MENU -->
    <div class="row no-gutters" v-if="showSubMenu">
      <div class="col-12 ">
        <v-mainMenuSub class="sub-main-menu-large dsti-white-bg" />
      </div>
    </div>

    <!-- show_main_view : is defined in home/route.js -->
    <v-MainView v-if="show_main_view"/>

    <!-- FOOTER -->
    <div class="row no-gutters">
      <div class="col-12">
        <v-footerMenu />
      </div>
    </div>

    <vue-snotify></vue-snotify>
  </div>
        <!-- <router-view /> -->
</template>

<script>
import mainMenu from '../src/components/navigation/mainMenu'
import adminMenu from '../src/components/navigation/adminMenu'
import mainMenuSub from '../src/components/navigation/mainMenuSub'
import MainView from '../src/components/view/main'
import AdminToolsView from '../src/components/view/adminTools'
import footerMenu from '../src/components/navigation/mainFooter'
import slider from '../src/components/widget/slider'
import searchbar from '../src/components/widget/searchbar'
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      show_admin_view: this.showAdminMenu,
      show_main_view: this.show_main_view,
      show_sub_menu: false
    };
  },
  computed: {
    showSubMenu: function () {
      if(this.$mq != 'sm' && !this.show_admin_view) {
        return this.show_sub_menu = true;
      }
    }
  },
  created () {
       this.show_admin_view = this.$route.meta.displayAdminMenu,
       this.show_main_view = this.$route.meta.show_main_view
   },
  mounted() {
    this.$nextTick(() => {
      // run JQUERY HERE!
      // $('#app').hide().fadeIn('slow');
    });
  },
  components: {
    'v-mainMenu': mainMenu,
    'v-mainMenuSub': mainMenuSub,
    'v-adminMenu': adminMenu,
    'v-MainView': MainView,
    'v-AdminToolsView': AdminToolsView,
    'v-footerMenu': footerMenu,
    'v-slider': slider,
    'v-searchbar': searchbar
  }
};
// CSS
require('../src/assets/css/main.css')
</script>

<style>
</style>
