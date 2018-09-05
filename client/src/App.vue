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
        <v-mainMenuSub />
        <v-AdminToolsView /> <!-- nested -->
      </div>
      <div class="col-12" v-if="show_main_view">
        <v-mainMenu />
      </div>
    </div>

    <!-- SUB MENU -->
    <div class="row no-gutters" v-if="showSubMenu">
      <div class="col-12 ">
        <v-mainMenuSub />
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

    <back-to-top text="top" visibleoffset="40" bottom="50px" right="40px">
        <v-icon x-large>fa-chevron-up</v-icon>
    </back-to-top>
    <vue-snotify></vue-snotify>

  </div>
        <!-- <router-view /> -->
</template>

<script>
import mainMenu from '../src/components/navigation/mainNav'
import adminMenu from '../src/components/navigation/adminNav'
import mainMenuSub from '../src/components/navigation/subNav'
import MainView from '../src/components/view/main'
import AdminToolsView from '../src/components/view/adminTools'
import footerMenu from '../src/components/navigation/footerNav'
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
// animation css https://www.npmjs.com/package/animate.css https://daneden.github.io/animate.css/
require('../node_modules/animate.css')
</script>

<style>
</style>
