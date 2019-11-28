<template>
<v-app>
    <navBar/>
    <Header :fullHeight="fullHeight" :title="title" :subtitle="subtitle"/>
    <v-content style="margin-bottom: 100px;">
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
