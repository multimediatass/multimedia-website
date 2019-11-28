<template>
    <div id="header" :class="[fullHeight ? 'fullHeight' : '']">
        <h1 v-if="fullHeight != true">{{title}}</h1>
        <p v-if="fullHeight != true">{{subtitle}}</p>
        <!-- <span class='hero__wave'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 1921 819.8' style='enable-background:new 0 0 1921 819.8;' xml:space='preserve' class='svg hero__wave--svg replaced-svg'><style type='text/css'>.st0{fill:#FFFFFF;}.st1{opacity:5.000000e-02;fill:#FFFFFF;}</style><path class='st0' d='M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4  c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z'></path><path class='st1' d='M1921,387.9v431.9H0V0h13l226.6,594.4c14.4,35.7,34,67.4,58.3,94.3c24.4,26.9,54.2,49.8,88.6,68.1  c50.2,26.6,105.8,40.1,165.2,40.1c36.1,0,63.6-5.2,72.6-6.9c21.6-4,53.9-12.9,96.1-26.2L1921,387.9z'></path></svg></span> -->
        <span v-if="fullHeight == true" class='hero__wave'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 1920 204.8' style='enable-background:new 0 0 1920 204.8;' xml:space='preserve' preserveAspectRatio='none' class='svg hero__wave--svg replaced-svg'><style type='text/css'>.st0{fill:#FFFFFF;}</style><path class='st0' d='M367,41.4c235-43.3,518-74.9,736.8,23.9c121.4,54.9,250.6,103.2,395.6,103.2c116.1,0,242.4-31,383.1-114.4  c13.4-7.9,25.9-15.3,37.5-22.2v173H0l0-172C0,32.8,132,84.6,367,41.4z'></path></svg></span>
    </div>
</template>
<script>
export default {
    props: {
        fullHeight: Boolean,
        title: String,
        subtitle: String
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
</style>