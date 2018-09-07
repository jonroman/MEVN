<template>
  <div id="app" class=".container-fluid dsti-grey-bg">
    <!-- MAIN MENU -->
    <div class="row no-gutters">
      <!-- SHOW ADMIN and Main Menu -->
      <div class="col-2" v-if="showAdminNav">
        <AdminNav />
      </div>
      <div class="col-10" v-if="showAdminNav">
        <MainNav />
        <SubNav />
        <router-view class="animated lightSpeedIn" />
      </div>
      <div class="col-12" v-if="!showAdminNav">
        <MainNav />
      </div>
    </div>

    <!-- SUB MENU -->
    <div class="row no-gutters" v-if="showSubNav">
      <div class="col-12 ">
        <SubNav />
      </div>
    </div>

    <div v-if="!showAdminNav">
      <router-view />
    </div>

    <!-- FOOTER -->
    <div class="row no-gutters">
      <div class="col-12">
        <FooterNav />
      </div>
    </div>

    <back-to-top text="top" visibleoffset="40" bottom="50px" right="40px">
        <v-icon x-large>fa-chevron-up</v-icon>
    </back-to-top>
    <vue-snotify></vue-snotify>

  </div>
</template>

<script>
import MainNav from '../src/components/navigation/mainNav'
import AdminNav from '../src/components/navigation/adminNav'
import SubNav from '../src/components/navigation/subNav'
import FooterNav from '../src/components/navigation/footerNav'


/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      showAdminNav: this.$route.meta.displayAdminNav,
      showMainNav: this.$route.meta.displayMainNav,
      showSubNav: this.$route.meta.displaySubNav
    };
  },
  watch: {
    $route: function (to, from) {
       this.showAdminNav = this.$route.meta.displayAdminNav,
       this.showMainNav = this.$route.meta.displayMainNav,
       this.showSubNav = this.$route.meta.displaySubNav
    }
  },
  mounted() {
    this.$nextTick(() => {
      // run JQUERY HERE!
      // $('#app').hide().fadeIn('slow');
    });
  },
  components: {
    'MainNav': MainNav,
    'SubNav': SubNav,
    'AdminNav': AdminNav,
    'FooterNav': FooterNav
  }
};
// CSS
require('../src/assets/css/main.css')
// animation css https://www.npmjs.com/package/animate.css https://daneden.github.io/animate.css/
require('../node_modules/animate.css')
</script>

<style>
</style>
