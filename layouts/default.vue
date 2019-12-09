<template>
<v-app>
    <navBar/>
    <Header :fullHeight="fullHeight" :title="title" :subtitle="subtitle"/>
    <v-content style="background: #ffffff !important;" class="py-0 py-md-5">
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
      }else if (this.$route.name=="about") {
        return store.about.fullHeight
      }else if (this.$route.name=="product") {
        return store.product.fullHeight
      }else if (this.$route.name=="activity") {
        return store.activity.fullHeight
      }else if (this.$route.name=="admin_panel"){
        return store.admin.fullHeight
      }
    },
    title(){
      const store = this.$store.state.routeMeta
      if (this.$route.name=="index") {
        return store.index.title
      }else if (this.$route.name=="peminjaman") {
        return store.peminjaman.title
      }else if (this.$route.name=="about") {
        return store.about.title
      }else if (this.$route.name=="product") {
        return store.product.title
      }else if (this.$route.name=="activity") {
        return store.activity.title
      }else if (this.$route.name=="admin_panel"){
        return store.admin.title
      }
    },
    subtitle(){
      const store = this.$store.state.routeMeta
      if (this.$route.name=="index") {
        return store.index.subtitle
      }else if (this.$route.name=="peminjaman") {
        return store.peminjaman.subtitle
      }else if (this.$route.name=="about") {
        return store.about.subtitle
      }else if (this.$route.name=="product") {
        return store.product.subtitle
      }else if (this.$route.name=="activity") {
        return store.activity.subtitle
      }else if (this.$route.name=="admin_panel"){
        return store.admin.subtitle
      }
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>
