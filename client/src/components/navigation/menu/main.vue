<template>
    <div id="main-menu">
        {{setClasses}}
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle active">
            <router-link class="dsti-link" :class="{'nav-link': cNavLink}" to="/">
                mydsti <span class="sr-only">(current)</span>
            </router-link>
        </li>
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle">
            <router-link class="dsti-link" :class="{'nav-link': cNavLink}" to="/profile">
                profile <span class="sr-only">(current)</span>
            </router-link>
        </li>
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle">
            <router-link class="dsti-link" :class="{'nav-link': cNavLink}" to="/posts">
                posts <span class="sr-only">(current)</span>
            </router-link>
        </li>
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle">
            <router-link class="dsti-link" :class="{'nav-link': cNavLink}" to="/admin">
                admin <span class="sr-only">(current)</span>
            </router-link>
        </li>
    </div>
</template>

<script>
export default {
   name: 'MainMenu',
   data () {
       return {
           cMenuLink: true,
           cNavItem: false,
           cNavLink: false
       }
   },
   computed: {
    setClasses: function () {
        if (this.$mq == 'sm') {
            this.cMenuLink = false,
            this.cNavItem = true,
            this.cNavLink = true
        }
    }
   },
   beforeCreated () {},
   created () {},
   mounted () {
       //JQUERY here!
        // $('#main-menu').hide.show('slow');
   },
   beforeDestroy () {},
   destroy () {}
 }
 </script>

<style scoped>
    .menu-link {
        list-style: none;
        border-bottom: solid grey 2px;
        color: white;
        margin-left: 40px;
        font-size: .8em;
        float: left;
        margin-top: 10px;
        padding-bottom: 4px;
    }

    a {
        color: white;
    }
    .nav-item {
        padding-left: 10px;
        border-bottom: solid grey;
        color: white;
        font-size: .8em;
        border-bottom-width: 1px;
        text-align: left;
    }

    .active {
        /* background-color:  rgb(189, 104, 47); */
    }

    .arrow {
        position: absolute;
        right: 0px;
        font-size: 2em;
        margin:0px;

    }
</style>
