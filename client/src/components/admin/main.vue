<template>
  <AdminView/>
</template>

<script>
import AdminView from '../view/adminTools'

/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {
  },
  created () {
   },
  mounted() {
    this.$nextTick(() => {
      // run JQUERY HERE!
    });
  },
  components: {
    'AdminView': AdminView
  }
};
</script>

<style>
</style>

