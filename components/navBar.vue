<template>
<div>
   <v-app-bar
      app
      flat
      height="65"
      class="appbar px-2"
      :color="colorNav"
      dark
      elevate-on-scroll
      scroll-target="#header"
      :class="[transparentNav ? '' : 'colored']"
    >
      
      <v-toolbar-title>Multimedia</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn small to="/" text>Home</v-btn>
        <!-- <v-btn small to="/about" text>About</v-btn>
        <v-btn small to="/product" text>Product</v-btn>
        <v-btn small to="/activity" text>Activity</v-btn> -->
        <v-btn small to="/peminjaman" text>Peminjaman</v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawerAct"></v-app-bar-nav-icon>
      
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/21368711_1501046613320872_5803188875072513101_o.png?_nc_cat=100&_nc_oc=AQmcghKOkNteC68MZyQB-6b0Csdd0pM_tlM5QMHnaMiHUZu-bWk-vQNfQVx2T6es4Sw&_nc_ht=scontent-sin6-1.xx&oh=3ab4f0077df6abead587bb8cb99e8b55&oe=5E41A5CB"
          transition="scale-transition"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Multimedia FIT</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
</template>
<script>
export default {
    data: () => ({
        transparentNav: true,
        drawer: null,
        lastScrollPosition: 0,
        activeBtn: 1,
        items: [
          { title: 'Home', icon: 'mdi-home', link: '/' },
          // { title: 'About', icon: 'mdi-account', link: '/about' },
          // { title: 'Product', icon: 'mdi-launch', link: '/product' },
          // { title: 'Activity', icon: 'mdi-timelapse', link: '/activity' },
          { title: 'Peminjaman', icon: 'mdi-timelapse', link: '/peminjaman' }
        ],
    }),
    computed: {
      colorNav() {
        if (this.transparentNav == true) {
          return "transparent"
        }else {
          return "#0d0751"
        }
      }
    },
    methods: {
        onScroll () {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 1) {
                // return;
                this.transparentNav = true;
            }else {
                this.transparentNav = false;
            }
            // this.showNavbar = currentScrollPosition < this.lastScrollPosition
            // this.lastScrollPosition = currentScrollPosition
        },
        drawerAct(){
            this.drawer = !this.drawer
            // this.$store.commit('drawerAct');
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
}
</script>
<style lang="scss">
    .appbar {
      transition: 0.3s ease-out !important;
    }
    .appbar.colored {
      -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    }
</style>