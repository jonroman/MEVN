<template>
  <div class="main-menu main-menu-large dsti-blue-bg">
    <nav id="main-menu" class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <div class="underline">
                    <a class="nav-link" href="/">MYDSTI <span class="sr-only">(current)</span></a>
                </div>
            </li>
            <li class="nav-item">
                <div class="underline">
                    <a class="nav-link" href="/posts">PROJECT FLOW</a>
                </div>
            </li>
            <li class="nav-item">
                <div class="underline">
                    <a class="nav-link" href="/posts">EMPLOYEE</a>
                </div>
            </li>
            <li class="nav-item">
                <div class="underline">
                    <a class="nav-link" href="/posts">ADMIN</a>
                </div>
            </li>
            <li class="nav-item">
                <div class="underline">
                    <a class="nav-link" href="/posts">EPICOR</a>
                </div>
            </li>
        </ul>
        </div>
    </nav>
    <div id="logo">myDSTI</div>
  </div>
</template>

<script>
export default {
   name: 'MainMenu',
   data () {
       return {
           mainmenu: false
       }
   },
   beforeCreated () {
       console.log("************ beforeCreated life cycle ************")
   },
   created () {
       this.mainmenu = this.$route.meta.displayMainMenu
   },
   mounted () {},
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
.navbar {
    z-index: 10;
}

.nav-link {
    color: white;
    font-size: .8em;
    width: auto;
    padding-bottom: 0px;
    border-bottom-width: thin;
}

.underline {
    border-bottom: solid white;
    border-bottom-width: 1px;
    margin-left: 20px;
}
#logo {
    border-bottom: solid  rgb(190, 78, 37);
    display:inline-block;
    color: white;
    margin-left: 40px;
    font-size: 2em;
    border-bottom-width: 3px;
    padding-bottom: 5px;
    text-align: left;
    padding-right: 20px;
}

</style>