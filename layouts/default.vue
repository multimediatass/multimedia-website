<template>
<v-app>
    <navBar/>
    <Header :fullHeight="fullHeight" :title="title" :subtitle="subtitle"/>
    <v-content style="margin-bottom: 100px; background: #ffffff !important;">
        <nuxt />
    </v-content>
    <Footer/>
</v-app>
</template>

<script>
import navBar from '~/components/navBar.vue'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  components: {
    navBar,
    Header,
    Footer
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
      scrollToTop(200)
      setTimeout(() => {
        next()
      }, 250);
    });
  },
  computed: {
    fullHeight(){
      const store = this.$store.state.routeMeta
      if (this.$route.name=="index") {
        return store.index.fullHeight
      }else if (this.$route.name=="peminjaman") {
        return store.peminjaman.fullHeight
      }else {
        
      }
    },
    title(){
      const store = this.$store.state.routeMeta
      if (this.$route.name=="index") {
        return store.index.title
      }else if (this.$route.name=="peminjaman") {
        return store.peminjaman.title
      }else {
        
      }
    },
    subtitle(){
      const store = this.$store.state.routeMeta
      if (this.$route.name=="index") {
        return store.index.subtitle
      }else if (this.$route.name=="peminjaman") {
        return store.peminjaman.subtitle
      }else {
        
      }
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>
