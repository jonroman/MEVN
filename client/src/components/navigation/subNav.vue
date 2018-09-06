<template>
<div class="sub-main-menu-large dsti-white-bg">
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
</div>
</template>

<script>
export default {
   name: 'MainMenuSub',
   data () {
       return {
           mainmenusub: false
       }
   },
   beforeCreated () {
       console.log("************ beforeCreated life cycle ************")
   },
   created () {
       this.mainmenusub = this.$route.meta.displayMainMenuSub
   },
   mounted () {},
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
    #main-menu-sub {
        background-color: white;
    }

</style>
