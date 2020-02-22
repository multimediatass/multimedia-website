<template>
<v-app>
    <navBar/>
    <Header/>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64">
        <!-- <v-img
          width="40"
          transition="fade-transition"
          :src="require('@/assets/img/logo/logo-2.svg')"
          :lazy-src="require('@/assets/img/logo/logo-2.svg')"
        ></v-img> -->
      </v-progress-circular>
    </v-overlay>
    <v-content style="background: #ffffff !important;" class="py-0">
        <nuxt />
    </v-content>
    <Footer/>
    <back-to-top bottom="25px" right="25px">
      <v-btn fab dark color="#b22d30"><v-icon>mdi-chevron-up</v-icon></v-btn>
    </back-to-top>
</v-app>
</template>

<script>
import navBar from '~/components/navBar.vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import BackToTop from 'vue-backtotop'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    }
  },
  components: {
    navBar,
    Header,
    Footer,
    BackToTop 
  },
  created() {
    function scrollToTop(scrollDuration) {
        var cosParameter = window.scrollY / 2,
            scrollCount = 0,
            oldTimestamp = performance.now();
        function step (newTimestamp) {
            scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
            if (scrollCount >= Math.PI) window.scrollTo(0, 0);
            if (window.scrollY === 0) return;
            window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }
    this.$router.beforeEach((to, from, next) => {
      scrollToTop(350)
      next()
    });
  }
}
</script>
<style lang="scss">
</style>