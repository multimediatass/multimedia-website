<template>
    <div id="header" :class="[fullHeight ? 'fullHeight' : '', title==null ? 'hide' : '']">
      <div class="contentHeader">
      <template v-if="fullHeight != true">
          <h1 class="display-1 font-weight-bold">{{title}}</h1>
          <p class="subtitle">{{subtitle}}</p>
      </template>
      <template v-else>
        <h1 class="display-1 font-weight-bold">{{title}}</h1>
        <p class="subtitle">{{subtitle}}</p>
        <!-- <div class="headerHalf">
          <div class="headerLeft">
            <img :src="require('@/assets/standing.png')" alt="">
          </div>
          <div class="headerRight">
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
          </div>
        </div> -->
      </template>
      </div>
      <!-- <video autoplay muted loop id="videoBackground">
        <source :src="vid" type="video/mp4">
        Your browser does not support HTML5 video.
      </video> -->
      <!-- <span v-if="fullHeight == true" class='hero__wave'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 1920 204.8' style='enable-background:new 0 0 1920 204.8;' xml:space='preserve' preserveAspectRatio='none' class='svg hero__wave--svg replaced-svg'><style type='text/css'>.st0{fill:#FFFFFF;}</style><path class='st0' d='M367,41.4c235-43.3,518-74.9,736.8,23.9c121.4,54.9,250.6,103.2,395.6,103.2c116.1,0,242.4-31,383.1-114.4  c13.4-7.9,25.9-15.3,37.5-22.2v173H0l0-172C0,32.8,132,84.6,367,41.4z'></path></svg></span> -->
      <!-- <span v-if="fullHeight == true" class='hero__wave'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1920 242.6" style="enable-background:new 0 0 1920 242.6;" xml:space="preserve" class="svg replaced-svg"><style type="text/css">.st0{fill:#FFFFFF;}.st1{fill:none;}</style><path class="st0" d="M1920,70.5v172.1H0v-27.9C171.3,122.8,367.9,89,589.6,113.4C923.1,149.9,1014.7,43,1239.7,7  c224.9-35.9,442.2,77.7,576.1,75.6C1853.2,82,1888,78,1920,70.5z"></path><rect x="-1036" y="-829.4" class="st1" width="1920" height="137.6"></rect><rect x="-1136" y="-829.4" class="st1" width="2446" height="380"></rect></svg></span> -->
      <!-- <span class="hero__wave">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><style>.cls-1{fill:#fff;}</style></defs><polygon class="cls-1" points="-261 1063 2027 625 2027 1179 -261 1179 -261 1063"/></svg>
      </span> -->
      <!-- <span v-if="fullHeight == true" class='hero__wave'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1920 397" style="enable-background:new 0 0 1920 397;" xml:space="preserve" class="svg replaced-svg"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}</style><path class="st0" d="M1920,0v397H0V64.4c109.8,226.9,368.5,351.3,621,283.7L1920,0z"></path></svg></span> -->
      <!-- <span v-if="fullHeight == true" class="hero__wave"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2353.6 1112.5" style="enable-background:new 0 0 2353.6 1112.5;" xml:space="preserve" class="svg replaced-svg"><style type="text/css">.st0{fill:#FFFFFF;}</style><path class="st0" d="M2353.6,0v1112.5H0c132.1-171.4,350.7-231.4,655.9-179.9c474,79.9,637.1-23.3,882.7-262.4  C1802.7,413,1870,54.1,2353.6,0z"></path></svg></span> -->
      <!-- <span v-if="fullHeight == true" class="hero__wave"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 589" class="svg replaced-svg">
          <defs>
            <pattern id="hero-svg-shape-4-b" width="125.268" height="126.539" x="-125.268" y="-126.539" patternUnits="userSpaceOnUse">
              <use transform="scale(.63588)" xlink:href="#hero-svg-shape-4-a"></use>
            </pattern>
            <image id="hero-svg-shape-4-a" width="197" height="199" xlink:href="data:image/png;base64,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"></image>
          </defs>
          <g fill="none" fill-rule="evenodd" transform="translate(-8 -3)">
            <polygon fill="url(#hero-svg-shape-4-b)" points="0 514 1927.918 0 1927.918 71 0 588" opacity=".134"></polygon>
            <polygon fill="#FFF" points="6 592 6 578.789 1929 69 1928 592"></polygon>
          </g>
        </svg>
      </span> -->    
    </div>
</template>
<script>
export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
    computed: {
      title() {
        return this.$store.state.headerInfo.title
      },
      subtitle() {
        return this.$store.state.headerInfo.subtitle
      },
      fullHeight() {
        return this.$store.state.headerInfo.fullHeight
      }
    }
}
</script>

<style lang="scss">
.hero__wave {
  position: absolute;
  bottom: -3px;
  width: 100%;
  z-index: 0; }
.hero__wave_top {
  position: absolute;
  top: -3px;
  width: 100%;
  z-index: 0; }

.hero__wave--svg .st0 {
  fill: #ffffff;
  opacity: 1; }

.hero__wave--svg .st1 {
  fill: #0d0751;
  opacity: 1; }

span {
  display: inline-block; }

svg:not(:root) {
  overflow: hidden; }

svg {
  display: block; }

#videoBackground {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
</style>