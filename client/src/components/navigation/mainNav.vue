<template>
  <div class="main-menu dsti-blue-bg">
    <div v-if="$mq != 'sm'" class="mydsti-logo mydsti-logo-large right" />

    <!-- LARGE and MEDIUM -->
    <div id="MainNav" v-if="$mq != 'sm'" class="main-menu-large">
        <div id="menu-large">
            <div>
                <v-MainMenu />
            </div>
        </div>
        <div>
            <div id="logo">myDSTI</div>
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
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <v-MainMenu />
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">
                            Home <span class="sr-only">(current)</span></a>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li> -->
                </ul>
            </div>
        </nav>
    </div>
  </div>
</template>

<script>
import MainMenu from '../navigation/menu/main'

export default {
   name: 'MainNav',
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
   destroy () {},
   components: {
       'v-MainMenu': MainMenu
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
    padding-bottom: 0px;
    border-bottom-width: thin;
}

#navbarSupportedContent {
    margin-top: 10px;
}

#logo {
    /* background-color: pink; */
    border-bottom: solid  rgb(190, 78, 37);
    display:inline-block;
    color: white;
    margin-left: 40px;
    font-size: 2em;
    border-bottom-width: 4px;
    text-align: left;
    width: 130px;
    padding-bottom: 10px;
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
    /* background-color: brown; */
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
