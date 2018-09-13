<template>
  <div id="search-bar">
    <v-form>
    <!-- EXAMPLE https://codepen.io/pen/?editors=1010 -->
      <v-text-field
        v-model="criteria"
        box
        label="SEARCH"
        append-icon="search"
        clearable
        height="90%"
        color="orange darken-3"
        @click:append="search()"
        @keyup.native.enter="search()"
       ></v-text-field>
    </v-form>
  </div>
<!-- rgba(188, 104, 47) -->
</template>

<script>
export default {
  name: 'searchbar',
  props: {},
  data() {
    return {
      criteria: ''
    }
  },
  methods: {
    search: function() {
      if(this.criteria.length > 0) {
        console.log('you hit enter fucker');
        this.$router.push({path: '/results/'+this.criteria});
      }
    }
  }
}
</script>

<style scoped>
  #search-bar {
    background-color: lightgrey;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 96%;
    height: 65%;
    text-align: center;
  }
</style>
