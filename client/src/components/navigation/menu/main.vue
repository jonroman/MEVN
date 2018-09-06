<template>
    <div id="main-menu">
        {{setClasses}}
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle active">
            <a v-bind:class="{'nav-link': cNavLink}" href="/">
                mydsti <span class="sr-only">(current)</span>
            </a>
        </li>
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle">
            <a v-bind:class="{'nav-link': cNavLink}" href="/">
                projectflow
            </a>
        </li>
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle">
            <a v-bind:class="{'nav-link': cNavLink}" href="/">
                employee
            </a>
        </li>
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle">
            <a v-bind:class="{'nav-link': cNavLink}" href="/">
                admin
            </a>
        </li>
        <li v-bind:class="{'menu-link': cMenuLink, 'nav-item': cNavItem}" class="upper-or-lower-toggle">
            <a v-bind:class="{'nav-link': cNavLink}" href="/">
                epicor
            </a>
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
        border-bottom: solid grey;
        color: white;
        margin-left: 40px;
        font-size: .8em;
        border-bottom-width: 1px;
        float: left;
        margin-top: 10px;
    }

    a {
        color: white;
    }
    .nav-item {
        border-bottom: solid grey;
        color: white;
        font-size: .8em;
        border-bottom-width: 1px;
        text-align: left;
    }

    .active {
        background-color:  rgb(189, 104, 47);
    }

    .arrow {
        position: absolute;
        right: 0px;
        font-size: 2em;
        margin:0px;

    }
</style>
