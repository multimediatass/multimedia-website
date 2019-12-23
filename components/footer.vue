<template>
<!-- <div class="wave" v-if="this.$route.name == 'index'">
  <span class='hero__wave_top'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 1920 204.8' style='enable-background:new 0 0 1920 204.8;' xml:space='preserve' preserveAspectRatio='none' class='svg hero__wave--svg replaced-svg'><style type='text/css'>.st1{fill:#0d0751;}</style><path class='st1' d='M367,41.4c235-43.3,518-74.9,736.8,23.9c121.4,54.9,250.6,103.2,395.6,103.2c116.1,0,242.4-31,383.1-114.4  c13.4-7.9,25.9-15.3,37.5-22.2v173H0l0-172C0,32.8,132,84.6,367,41.4z'></path></svg></span>
</div> -->

<v-footer id="footer" class="px-0 px-md-12">
  <div class="leftContent">
    <v-flex sm12 row justify-center justify-md-start align-center wrap pa-2>
  
      <!-- <h4 class="subheading font-weight-light">labmultimedia@tass.telkomuniversity.ac.id</h4> -->
    </v-flex>
  </div>
  <div class="rightContent">
    <v-img
      :src="require('@/assets/logo_mulmed.png')"
      :lazy-src="require('@/assets/logo_mulmed.png')"
    ></v-img>
  </div>
</v-footer>

</template>
<script>
export default {
    data: ()=>({
       icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram',
        ],
    }),
    components: {
    }
}
</script>
<style lang="scss">
.wave {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  bottom: 0;
}

#footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #ffffff;

  .leftContent {
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }

  .rightContent {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 0) {
      .rightContent {
        width: 100%;
        justify-content: center;

        .v-image {
          width: 50%;
          flex: unset !important;
        }
      }

      .leftContent {
        width: 100%;
        padding: 0;
        justify-content: flex-start;
      }
  }

  @media only screen and (min-width: 960px){
    .rightContent {
      width: 25%;
      justify-content: flex-end;

      .v-image {
        width: 70%;
        flex: unset !important;
      }
    }

    .leftContent {
      width: 75%;
      padding: 10px 20px;
      justify-content: flex-start;
    }
  }
}
</style>