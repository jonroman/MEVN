<template>
<div id="results">
  <h1>Results</h1>
  <h2>Search this criteria... "{{ criteria }}"</h2>
  </div>
</div>
</template>

<script>
import SearchBar from '../widget/searchbar'
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      criteria: ''
    }
  },
  components: {
    'SearchBar': SearchBar
  },
  mounted() {
      this.criteria = this.$route.params.criteria
    this.$nextTick(() => {
      // run JQUERY HERE!
      // $('#app').hide().fadeIn('slow');
    });
  }
};
</script>

<style>
</style>