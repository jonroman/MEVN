<template>
<div v-if="links.length > 0" class="sub-main-menu sub-main-menu-large dsti-white-bg" :class="{'mobile-menu': $mq === 'sm'}" >
  <ul v-if="$mq !== 'sm'" class="nav">
    <li v-for="link in links" class="nav-item upper-or-lower-toggle dsti-link">
          <router-link :to="`${link.href}`">
              {{ link.name }}<span class="sr-only">(current)</span>
          </router-link>
    </li>
  </ul>

    <div v-else v-for="link in links">
      <router-link :to="`${link.href}`">
        <div class="upper-or-lower-toggle dsti-link" :class="{'mobile-menu-links': $mq === 'sm'}">
          {{ link.name }}
        </div>
      </router-link>
    </div>
</div>
</template>

<script>
export default {
   name: 'MainMenuSub',
   data () {
       return {
           links: [],
           animate: false
       }
   },
  watch: {
    $route: function () {
      this.links = this.$route.meta.subMenu
    }
  },
  created () {
      this.links = this.$route.meta.subMenu
  },
  methods: {
  },
  mounted() {
    this.$nextTick(() => {
      // run JQUERY HERE!
    })
  }
}
</script>

<style scoped>


  .nav-item {
    margin: 20px 5px 5px 10px;
    /* padding: 0px 20px 0px 0px; */
  }

  a {
    color: grey;
    text-decoration: none;
    padding-bottom: 5px;
  }

  a:link {
    color: rgb(58, 80, 104);
    text-decoration: none;
  }

  a:hover {
    border-bottom: solid rgb(58, 80, 104) 4px;
    color: rgb(58, 80, 104);
    text-decoration: none;
    font-weight: bolder;
  }

  .mobile-menu {
    height: auto;
  }

  .mobile-menu-links {
    margin: 0px 0px 0px 0px;
    padding: 5px;
    width: 100%;
    border-bottom: solid rgb(58, 80, 104) 1px;
  }

  .mobile-menu-links a {
    border-bottom: none;
    color: rgb(58, 80, 104);
    text-decoration: none;
  }

  .mobile-menu-links:hover {
    cursor: pointer;
  }

</style>
