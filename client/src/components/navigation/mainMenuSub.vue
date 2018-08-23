<template>
        <nav class="navbar navbar-expand-lg sub-main-menu dsti-white-bg">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/posts/new">Add Posts <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            </div>
        </nav>
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
