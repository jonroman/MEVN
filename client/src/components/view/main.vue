<template>
  <div id="MainView" v-if="show_main_view">
    <div id="large-view" v-if="$mq === 'lg'"> <!-- VIEW: Main Large -->
      <div class="row no-gutters">
       <div class="col-8 vertical-slider vertical-slider-large">
         <div class="vertical-slider-middle">
           <h2>{{$mq}}</h2>
           <h2>show main view : {{ show_main_view }}</h2>
         </div>
       </div>
       <div class="col-4">
         <div class="search-bar-large">
           <div class="search-bar-middle">
             <h3>Search Bar</h3> col-lg-4
           </div>
         </div>
         <div class="quick-links quick-links-large">
           <div class="quick-links-middle">
             <h3>Quick Links</h3> col-lg-4
           </div>
         </div>
       </div>
     </div>
     <div class="row no-gutters">
       <div class="col-3">
         <div class="event-log event-log-large">
           <div class="event-log-middle ribbon">
             <h3>Event Log</h3> col-lg-3
           </div>
         </div>
         <div class="employee-slider employee-slider-large">
           <div class="employee-slider-middle ribbon">
             <h3>Emplyee SLider</h3> col-lg-3
           </div>
         </div>
       </div>
       <div class="col-5">
         <div class="recent-log recent-log-large">
           <div class="recent-log-middle ribbon">
             <h3>Recent Log</h3> col-lg-5
           </div>
         </div>
       </div>
       <div class="col-4">
         <div class="im im-large">
           <div class="im-middle ribbon">
             <h3>Instant Message</h3> col-lg-4
           </div>
         </div>
       </div>
     </div>
   </div> <!-- LARGE -->

    <!-- MEDIUM VIEW -->
    <div id="large-view" v-if="$mq === 'md'"> <!-- VIEW: Main Large -->
      <div class="row no-gutters">
        <div class="col-12 vertical-slider vertical-slider-large">
          <div class="vertical-slider-middle">
            <h1>Vertical SLider</h1>
            <h2>{{$mq}}</h2>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-8">
          <div class="recent-log recent-log-medium">
            <div class="recent-log-middle recent-log-middle-medium ribbon">
              <h3>Recent Log</h3> col-lg-5
            </div>
          </div>
          <div class="event-log event-log-medium">
            <div class="event-log-middle event-log-middle-medium ribbon">
              <h3>Event Log</h3> col-lg-3
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="search-bar-medium">
            <div class="search-bar-middle search-bar-middle-medium ribbon">
              <h3>Search Bar</h3> col-lg-4
            </div>
          </div>
          <div class="im im-medium">
            <div class="im-middle im-middle-medium ribbon">
              <h3>Instant Message</h3> col-lg-4
            </div>
          </div>
          <div class="employee-slider employee-slider-medium">
            <div class="employee-slider-middle employee-slider-middle-medium ribbon">
              <h3>Emplyee SLider</h3> col-lg-3
            </div>
          </div>
        </div>
      </div>
    </div> <!-- MEDIUM-->

    <!-- SMALL VIEW -->
    <div id="large-view" v-if="$mq === 'sm'"> <!-- VIEW: Main Large -->
      <div class="row no-gutters">
        <div class="col-12 vertical-slider vertical-slider-small">
          <div class="vertical-slider-middle vertical-slider-middle-small">
            <h1>Vertical Slider</h1>
            <h2>{{$mq}}</h2>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12">
          <div class="recent-log recent-log-small">
            <div class="recent-log-middle recent-log-middle-small ribbon">
              <h3>Recent Log</h3> col-lg-5
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12">
          <div class="employee-slider employee-slider-small">
            <div class="employee-slider-middle employee-slider-middle-small ribbon">
              <h3>Employee Slide</h3> col-lg-5
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12">
          <div class="event-log event-log-small">
            <div class="event-log-middle event-log-middle-small ribbon">
              <h3>Event Log</h3> col-lg-5
            </div>
          </div>
        </div>
      </div>
    </div> <!--  SMALL -->
  </div>
</template>

<script>
export default {
   name: 'MainView',
   data () {
       return {
           show_main_view: false
       }
   },
   beforeCreated () {},
   created () {
       this.show_main_view = this.$route.meta.show_main_view
   },
   mounted () {},
   beforeDestroy () {},
   destroy () {}
}
</script>

<style scoped>
</style>