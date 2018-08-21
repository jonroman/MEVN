<template>
<div id="app" class=".container-fluid dsti-grey-bg">
  <!-- VIEW: Main Large -->
  <div class="row no-gutters">
    <div class="col-12 main-menu main-menu-large dsti-blue-bg">
     <h1>col-12 MAIN MENU </h1>
    </div>
  </div>

  <div class="row no-gutters">
    <div class="col-12 sub-main-menu sub-main-menu-large dsti-white-bg">
      <h3>col-12 SUB main Menu</h3>
    </div>
  </div>

  <div class="row no-gutters">
    <div class="col-lg-8 vertical-slider vertical-slider-large">
      <div class="vertical-slider-middle">
        <h1>Vertical Slider col-lg-8</h1>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="search-bar">
        <div class="search-bar-middle">
          <h3>Search Bar</h3> col-lg-4
        </div>
      </div>
      <div class="quick-links quick-links-large">
        <div class="quick-links-middle">
          <h3>Quick Links</h3> col-lg-4
        </div>
      </div>
    </div>
  </div>

  <div class="row no-gutters">
    <div class="col-lg-3">
      <div class="event-log event-log-large">
        <div class="event-log-middle">
          <h3>Event Log</h3> col-lg-3
        </div>
     </div>
      <div class="employee-slider">
        <div class="employee-slider-middle">
          <h3>Emplyee SLider</h3> col-lg-3
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="recent-log recent-log-large">
        <div class="recent-log-middle">
          <h3>Recent Log</h3> col-lg-5
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="im im-large">
        <div class="im-middle">
          <h3>Instant Message</h3> col-lg-4
        </div>
      </div>
    </div>
  </div>

  <div class="row no-gutters">
    <div class="col-12  dsti-blue-bg">
     <h1>col-12 FOOTER MENU </h1>
      <v-footerMenu />
    </div>
  </div>

  <!-- VIEW: Main Medium -->


  <!-- VIEW: Main Small -->


    <!-- <router-view/> -->
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import mainMenu from '../src/components/navigation/mainMenu'
import adminMenu from '../src/components/navigation/adminMenu'
import mainMenuSub from '../src/components/navigation/mainMenuSub'
import footerMenu from '../src/components/navigation/mainFooter'
import slider from '../src/components/widget/slider'
import searchbar from '../src/components/widget/searchbar'
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      admin_view: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      // run JQUERY HERE!
      $('#app').hide().fadeIn('slow');
    });
  },
  components: {
    'v-mainMenu': mainMenu,
    'v-mainMenuSub': mainMenuSub,
    'v-adminMenu': adminMenu,
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
