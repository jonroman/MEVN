<template>
<div>
    <div class="row no-gutters" v-if="$mq == 'lg'">
        <div class="col-8 spa spa-large">
            <div class="spa-middle ribbon">
                this is the spa
            </div>
        </div>
        <div class="col-4 tool-menu">
            <div class="tool-menu-middle ribbon">
                this is the tool menu
            </div>
        </div>
    </div>
    <div class="row no-gutters" v-else>
        <div class="col-12 tool-menu">
            <div class="tool-menu-middle ribbon">
                this is the tool menu
            </div>
        </div>
        <div class="col-12 spa spa-large">
            <div class="spa-middle ribbon">
                this is the spa
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
   name: 'AdminTools',
   data () {
       return {
       }
   },
   beforeCreated () {},
   created () {
   },
   mounted () {},
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
</style>