<template>
  <div id="vertical-slider" class="animated zoomInUp" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="slider" :class="{'animated': animate, 'bounceInUp': enter, 'zoomOut': exit}">
      <a :href="href">
        <img v-if="$mq !== 'sm'" class="feature-img" :src="slides[index].picSrc" />
        <img v-else class="feature-img resize-image" :src="slides[index].picSrc" />
      </a>
    </div>
    <div v-if="$mq !== 'sm'" class="post-tag">
      <!-- <div class="controls" :class="{'animated': pulsePlayButton, 'pulse': pulsePlayButton}">
        <v-icon @click="play" style="cursor:pointer" color="blue-grey darken-2" size="10px" :class="{'animated': true, 'pulse': pulsePlayButton}">fa-play</v-icon>
        <v-icon @click="stop" style="cursor:pointer" color="blue-grey darken-2" size="10px" :class="{'animated': true, 'pulse': pulsePlayButton}">fa-pause</v-icon>
      </div> -->
      <div class="post-title">
        Posted On
      </div>
      <div class="post-date">
        {{ slides[index].date }}
      </div>
      <div class="comment-bubble dsti-orange-text">
        {{ slides[index].numComments }}
      </div>
    </div>
    <div v-if="$mq !== 'sm'" class="buttons">
        <div class="button" v-for="(button, key) in slides" :id="`button_`+key">
            <div v-if="`${index}` == key" class="arrow show animated" :class="{'animated': animateButton, 'shake': (index === key)}">
            <div class="pointer">
                <div class="point dsti-orange-bg-active"></div>
            </div>
            </div>
            <div class="control dsti-orange-bg" :class="{'dsti-orange-bg-active': (index === key), 'animated': animateButton, 'shake': (index === key) }"
            v-on:click="onClick(key)">
            {{button.name.slice(0,25)}}
            </div>
        </div>
    </div>
    <div v-else>
      <div class="small-buttons">
        <div class="small-button" v-for="(button, key) in slides" :id="`small-button-`+key" :title="`${button.name}`"
          :class="{'dsti-orange-bg': (index === key), 'animated': animateButton, 'swing': (index === key) }" @click="onClick(key)"
          @mouseenter="enterMobileButton()">
        </div>
      </div>
      <div class="mobile-label dsti-orange-bg" :class="{'animated': slideInMobileLabel, 'lightSpeedIn': slideInMobileLabel}">
        {{ slides[index].name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {

   name: 'verticalSlider',
   props: {
   },
   data () {
       return {
           carouselId: '',
           index: 0, //this is the index of the slides array below,
           animate: true, // turns animation on/off
           pause: false,
           showArrow: false,
           enter: false, //slide enters
           exit: false, // slide exits
           animateButton: false,
           pulsePlayButton: false,
           smallButtonShake: false,
           slideInMobileLabel: false,
           slides: [
                {id: 1, name: 'slide One is a realy long titiel', picSrc: require('../../assets/feature.png'), numComments: 1, date: '06-06-2018'},
                {id: 2, name: 'slide two', picSrc: require('../../assets/DSTI_Logo_XSmall.jpg'), numComments: 2, date: '06-06-2018'},
                {id: 3, name: 'sldie three', picSrc: require('../../assets/feature.png'), numComments: 3, date: '06-06-2018'},
                {id: 4, name: 'slide four', picSrc: require('../../assets/feature.png'), numComments: 4, date: '06-06-2018'},
                {id: 5, name: 'slide five', picSrc: require('../../assets/feature.png'), numComments: 5, date: '06-06-2018'}
                // {id: 6, name: 'slide six', picSrc: require('../../assets/feature.png'), numComments: 106, date: '06-06-2018'},
                // {id: 7, name: 'slide seven', picSrc: require('../../assets/feature.png'), numComments: 107, date: '06-06-2018'},
                // {id: 8, name: 'slide 8', picSrc: require('../../assets/feature.png'), numComments: 108, date: '06-06-2018'}
           ],
           href: ''
        }
   },
   methods: {
       setAllSlides: function () {
           if(this.slides.length > 5 && !this.sliderClicked) {
               this.manageQue()
           } else {
               this.newSlide()
           }
       },
       manageQue: function () {
        if(this.slides.length > 5) {
            this.slides.push(this.slides.shift())
        } else {
           this.index = this.index == this.slides.length-1 ?  0 : this.index + 1
        }
        this.newSlide()
       },
       newSlide: function () {
           if(!this.pause) {
            //   this.index > this.slides.length-2 ? this.index = 0 : this.index++
              this.href = '/posts/'+this.slides[this.index].id
              this.slideIn()
           }
       },
       slideIn: function() {
           if(!this.pause) {
            this.enter = true
            this.exit = false
            this.animateButton = true
            setTimeout(this.slideOut, 5000)
           }
       },
       slideOut: function () {
           if(!this.pause) {
            this.enter = false
            this.exit = true
            this.animateButton = false
            setTimeout(this.manageQue, 500)
           }
       },
       onMouseEnter: function () {
       },
       onMouseLeave: function () {
       },
       onClick: function (id) {
           this.index = id;
           this.sliderClicked = true
           this.slideInMobileLabel = true
       },
       enterMobileButton: function () {
           console.log("mobile button has been entered")
           this.slideInMobileLabel = false
       },
       play: function () {
           this.pause = false
           this.pulsePlayButton = true
           this.slideIn()
       },
       stop: function () {
           this.pause = true
           this.pulsePlayButton = true
       }
   },
   beforeCreated () {},
   created () {},
   mounted () {
       this.setAllSlides()
   },
   beforeDestroy () {},
   destroy () {}
}
</script>
<!-- animation css https://www.npmjs.com/package/animate.css https://daneden.github.io/animate.css/ -->
<style scoped>
    #vertical-slider {
        height: 100%;
        width:100%;
        background: repeating-linear-gradient(
            -55deg,
            #222,
            #222 10px,
            #333 10px,
            #333 20px
        );
        overflow: hidden;
    }
    .slider {
        float:left;
    }

    .feature-img {
    }

    .resize-image {
        height: 100%;
        width: 100%;
    }

    .buttons {
        position: absolute;
        width: 30%;
        height: 100%;
        right: 0px;
        overflow: hidden;
    }

    .button {
        width: 100%;
        height: 20%;
        display: inline-block;
        float: right;
        cursor: pointer;
    }

    .arrow {
        margin-top: auto;
        margin-bottom: auto;
        height: 100%;
        width: 10%;
        float: left;
        display: none;
    }

    .control {
        border-bottom:solid white thin;
        height: 100%;
        width: 90%;
        float:right;
        color: white;
        text-align: left;
        padding-top: 5%;
        padding-left: 10%;
        font-size: 1.5em;
        z-index: 200;
    }

    .pointer {
        transform: translate(70%, 85%) rotate(45deg);
    }

    .point {
        width: 30px;
        height: 30px;
        z-index: 199;
        border-left: solid white thin;
        border-bottom: solid white thin;
    }

    .hide {
        display: none;
    }

    .show {
        display: inline;
    }

    .post-tag {
        position: absolute;
        background-color: rgba(0,0,0,0.3); /*opacity */
        height: 5%;
        bottom: 10%;
        width: 150px;
        height: 30px;
        border-radius: 0px 20px 20px 0px;

    }

    .post-title {
        position: absolute;
        left: 0;
        color: white;
        font-size: .7em;
        padding-left: 10px;
        display:inline-block;
    }

    .post-date {
        position: absolute;
        left: 0;
        bottom: 0;
        color: white;
        font-size: .9em;
        padding-left: 10px;
        display:inline-block;
    }

    .comment-bubble {
        float: right;
        background-color: white;
        border-radius: 20px 20px 20px 0px;
        min-width: 25px;
        margin: 5px 5px 0px 5px;
        font-weight: bolder;
    }

    .controls {
        position: absolute;
        left: 80px;

    }

    .mobile-label {
        position: absolute;
        bottom: 0px;
        overflow: hidden;
        width: 100%;
        height: 40px;
        z-index: 100;
        padding-left: 10px;
        color: white;
        font-size: 1.2em;
        text-align:left;
    }

    .small-buttons {
        position: absolute;
        bottom: 30px;
        overflow: hidden;
        width: 100%;
        height: 60px;
        padding-left: auto;
        padding-right: auto;
    }

    .small-button {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        border: solid white thin;
        cursor: pointer;
        z-index: 300;
     }
</style>
