<template>
    <div id="admin-menu" class="admin-menu admin-menu-large dsti-blue-bg">
        <ul class="nav flex-column dsti-blue-bg">
            <li class="nav-item"><a class="nav-link" href="/">myDSTI</a></li>
            <li class="nav-item"><a class="nav-link" href="/posts">Posts</a></li>
        </ul>
    </div>
</template>

<script>
export default {
   name: 'AdminMenu',
   data () {
       return {
           showAdminMenu: false
       }
   },
   beforeCreated () {
   },
   created () {
       console.log('showAdminMenu', this.$route.meta.displayAdminMenu)
       this.showAdminMenu = this.$route.meta.displayAdminMenu
   },
   mounted () {
       //JQUERY here!
    //    $('#admin-menu').hide.show('slow');
   },
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
    #admin-menu {
        height: 100%;
        width: 100%;
        border-right: solid  rgb(221, 221, 221);
        border-bottom: solid  rgb(221, 221, 221);
        border-width: 1px;
    }

</style>
