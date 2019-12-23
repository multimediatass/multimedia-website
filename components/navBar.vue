<template>
<div>
   <v-app-bar
      app
      flat
      height="60"
      class="appbar px-0 px-md-12"
      :color="colorNav"
      dark
      elevate-on-scroll
      scroll-target="#header"
      :class="[transparentNav ? '' : 'colored']"
    >
      
      <v-toolbar-title>{{this.$route.path}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="item in items">
          
          <v-btn v-if="item.child.length == 0" :key="item.title" small :to="item.link" text>{{item.title}}</v-btn>
          <v-menu v-else open-on-hover offset-y transition="slide-y-transition" bottom>
            <template v-slot:activator="{ on }">
              <v-btn small text :key="item.title" v-on="on">{{item.title}}</v-btn>
            </template>
            <v-list>

            <v-list-item
              v-for="c in item.child"
              :key="c.title"
              :to="c.link"
              class="my-2 mx-2"
            >
              <v-list-item-avatar>
                <v-icon
                  :class="[c.icon]"
                  v-text="c.icon"
                ></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="c.title"></v-list-item-title>
                <v-list-item-subtitle v-text="c.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <!-- <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn> -->
              </v-list-item-action>
            </v-list-item>

            <!-- <v-list-item
              v-for="c in item.child"
              :key="c.title"
              :to="c.link"
            >
              <v-list-item-title>{{ c.title }}</v-list-item-title>
            </v-list-item> -->
          </v-list>
          </v-menu>

        </template>
      </v-toolbar-items>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawerAct"></v-app-bar-nav-icon>
    
      <!-- <v-btn icon class="hidden-sm-and-down">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
    >
      <!-- <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/21368711_1501046613320872_5803188875072513101_o.png?_nc_cat=100&_nc_oc=AQmcghKOkNteC68MZyQB-6b0Csdd0pM_tlM5QMHnaMiHUZu-bWk-vQNfQVx2T6es4Sw&_nc_ht=scontent-sin6-1.xx&oh=3ab4f0077df6abead587bb8cb99e8b55&oe=5E41A5CB"
          transition="scale-transition"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Multimedia FIT</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in drawerItems"
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
          { title: 'Beranda', icon: 'mdi-home', link: '/', child: [] },
          { title: 'Tentang', icon: 'mdi-account', link: '/about', child: [
            { title: 'Laboratorium', subtitle: 'Tentang Lab Multimedia', icon: 'mdi-rocket', link: '/profil' },
            { title: 'Produk', subtitle: 'Produk Lab Multimedia', icon: 'mdi-launch', link: '/produk' },
            { title: 'Aktivitas', subtitle: 'Aktivitas Lab Multimedia', icon: 'mdi-timelapse', link: '/aktivitas' }
          ] },
          { title: 'Peminjaman', icon: 'mdi-equal-box', link: '/peminjaman', child: [] }
        ]
    }),
    computed: {
      drawerItems() {
        let data = []
        this.items.forEach(item=>{
          if (item.child.length == 0) {
            data.push(item)
          }else {
            item.child.forEach(c=>{
              data.push(c)
            })
          }
        })
        return data
      },
      colorNav() {
        if (this.transparentNav == true) {
          return "transparent"
        }else {
          return "#180cac"
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
      // -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2) !important;
      // -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 0px -1px rgba(0,0,0,0.1), 0 1px 4px 0 rgba(0,0,0,0.1) !important;
      // box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 0px -1px rgba(0,0,0,0.1), 0 1px 4px 0 rgba(0,0,0,0.1) !important;
      box-shadow: 0 4px 10px rgba(0,0,0,.1) !important;
      -webkit-box-shadow: 0 4px 10px rgba(0,0,0,.1) !important;
    }
</style>
