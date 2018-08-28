<template>
    <div class="module menu-ribbon">
        <div :id="module_id">
            <button v-on:click="toggleModule" class="upper-or-lower-toggle module">
                {{ moduleName }}
                <v-icon class="right" size="10px">fa-chevron-down {{ flipIcon }}</v-icon>
            </button>
        </div>
        <div v-for="item in moduleItems"
            :id="`item_`+moduleName+`_${item.name}`"
            :class="{'show-items': isActive}"
            class="admin_menu_item upper-or-lower-toggle hide-items menu-ribbon"
            >
                <a :href="`${item.href}`"> {{ item.name }} </a>
        </div>
    </div>
</template>

<script>
export default {
   name: 'AdminMenu',
   props: {
       moduleName: String,
       moduleItems: Array,
   },
   data() {
       return {
           module_id: "module_" + this.moduleName,
           data_target: "#collapse_" + this.moduleName,
           flipIcon: '',
           isActive: false
       }
   },
   methods: {
       toggleModule: function(event) {
           this.isActive = !this.isActive;
           if(this.flipIcon == '') {
               this.flipIcon = 'fa-flip-vertical'
           } else {
               this.flipIcon = ''
           }

       }
   },
   beforeCreated () {},
   created () {},
   mounted () {
       //JQUERY here!
   },
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
    .menu-ribbon {
        border-top: solid white .5px;
    }

    .module {
        color: white;
        text-decoration:none;
    }

    .admin_menu_item a {
       color: white;
       text-decoration:none;
       font-size: .8em;
    }
    .admin_menu_item:hover {
       color: orange;
       background-color: rgb(189, 104, 47);
    }

    button {
        width: 100%;
        text-align: left;
        padding: 6px 0px 6px 20px;
    }

    .hide-items {
        display: none;
    }

    .show-items {
        background-color:  rgb(45, 62, 80);
        padding: 6px 0px 5px 60px;
        display: block;
    }

    .v-icon {
        padding-right: 20px;
    }
</style>
