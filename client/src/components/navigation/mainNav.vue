<template>
  <div class="main-menu dsti-blue-bg">
    <div v-if="$mq != 'sm'" class="mydsti-logo mydsti-logo-large right" />

    <!-- LARGE and MEDIUM -->
    <div id="MainNav" v-if="$mq != 'sm'" class="main-menu-large">
        <div id="menu-large">
            <MainMenu />
        </div>
        <div>
            <div id="logo">
                <h1 class="dsti-title">{{ pageTitle }}</h1>
            </div>
        </div>
    </div>

    <!-- SMALL -->
    <div v-if="$mq == 'sm'" id="main-menu-small">
        <nav class="navbar navbar-expand-lg dsti-blue-bg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                <img src="../../assets/hamburger.jpg" />
                </span>
            </button>
            <div id="logo-small">
                <img src="../../assets/mydstilogosmall.jpg" />
            </div>
            <div id="tools" >
                <img src="../../assets/smallmenutools.jpg" />
            </div>
            <div class="collapse navbar-collapse" :class="{'show': show}" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <AdminNav v-if="showAdminNav" />
                    <SubNav />
                    <MainMenu />
                </ul>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>
import MainMenu from '../navigation/menu/main'
import AdminNav from '../navigation/adminNav'
import SubNav from '../navigation/subNav'

export default {
   name: 'MainNav',
   data () {
       return {
           show: true,
           pageTitle: "myDSTI",
           showAdminNav: this.$route.meta.displayAdminNav
       }
   },
   watch: {
       $route: function () {
           this.pageTitle = this.$route.name
           this.showAdminNav = this.$route.meta.displayAdminNav
       }
   },
   methods: {
   },
   components: {
       'MainMenu': MainMenu,
       'AdminNav': AdminNav,
       'SubNav': SubNav
   }
}
</script>

<style scoped>
.navbar {
    z-index: 10;
    padding-top: 0px;
}

.nav-link {
    color: white;
    font-size: .8em;
    width: auto;
    padding: 10px 0px 0px 0px;
    border-bottom-width: thin;
}

#navbarSupportedContent {
    margin-top: 10px;
}

#logo {
    border-bottom: solid rgb(188, 104, 47) 5px;
    display:inline-block;
    color: white;
    margin-left: 40px;
    font-size: 2em;
    text-align: left;
    width: 180px;
    padding: 20px 0px 11px 0px;
}

#logo-small {
    background-color: pink;
    display:inline-block;
    margin-top:5px;
}

#tools {
    display:inline-block;
}

#menu-large {
    height: 40px;
}

.menu-link a {
    border-bottom: solid grey;
    display:inline-block;
    color: white;
    margin-left: 40px;
    font-size: .8em;
    border-bottom-width: 1px;
    text-align: left;
    float: left;
    margin-top: 10px;
}

 /* override main css */
.mydsti-logo {
    margin-top: 20px;
}

</style>
