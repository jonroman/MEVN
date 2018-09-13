<template>
    <div class="admin-menu admin-menu-large dsti-blue-bg">
        <div id="user-profile" class="dsti-admin-blue-bg ">
            <img src="../../assets/profilePlaceHolder.jpg">
        </div>
            <div id="admin-menu">
                <!-- BOOTSTRAP accordion -->
                <div id="accordion">
                    <v-admin-menu-module
                        moduleName="profile"
                        v-bind:moduleItems="[
                            {name: 'view', href: '/users'},
                            {name: 'edit', href: '/users/edit'}
                        ]"
                    ></v-admin-menu-module>
                    <v-admin-menu-module
                        moduleName="users"
                        v-bind:moduleItems="[
                            {name: 'view', href: '/users'},
                            {name: 'edit', href: '/users/edit'}
                        ]"
                    ></v-admin-menu-module>
                    <v-admin-menu-module
                        moduleName="posts"
                        v-bind:moduleItems="[
                            {name: 'View All', href: '/posts'},
                            {name: 'New', href: '/posts/new'}
                        ]"
                    ></v-admin-menu-module>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminMenuModule from '../navigation/menu/admin'
export default {
   name: 'AdminMenu',
   data () {
       return {
       }
   },
   components: {
       'v-admin-menu-module': AdminMenuModule
   },
   beforeCreated () {
   },
   created () {
   },
   mounted () {
       //JQUERY here!
   },
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
    #user-profile {
        padding-left:auto;
        padding-right:auto;
    }
</style>
