<template>
  <MainView/>
</template>

<script>
import MainView from '../view/main'

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
    'MainView': MainView
  }
};
</script>

<style>
</style>

