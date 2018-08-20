<template>
  <div id="app">
      <router-view/>
      <vue-snotify></vue-snotify>
    </div>
  </div>
</template>

<script>

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
    }
  };
</script>

<style>
  @import 'bootstrap'
</style>
