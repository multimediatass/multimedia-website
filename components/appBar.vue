<template>
<div>
    <v-app-bar
      app
      color="transparent"
      dark
      flat
      height="75"
      class="appbar"
    >
        <div class="d-flex align-center">
            <v-avatar>
                <v-img
                    alt="multimedia_fit_logo"
                    :src="require('@/js/assets/logo_mulmed2.png')"
                    transition="scale-transition"
                />
            </v-avatar>
        </div>

        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="drawerAct()"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
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

    <!-- <div id="menu" :class="[drawer ? 'show' : '']">
        <div class="container">
            <div class="menuContent" v-for="(item, index) in items" :key="index" @click="drawerAct()">
                <router-link :to="item.link">{{item.title}}</router-link>
            </div>
        </div>
    </div> -->

    <!-- <v-bottom-navigation
      v-model="activeBtn"
      :input-value="drawer"
      color="indigo"
      fixed
    >
      <v-btn v-for="(item, index) in items" :key="index" :to="item.link">
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>

    </v-bottom-navigation> -->

</div>
</template>
<script>
export default {
    data: () => ({
        drawer: null,
        activeBtn: 1,
        items: [
          { title: 'Home', icon: 'mdi-home', link: '/' },
          { title: 'About', icon: 'mdi-account', link: '/about' },
          { title: 'Product', icon: 'mdi-launch', link: '/product' },
          { title: 'Peminjaman', icon: 'mdi-timelapse', link: '/peminjaman' },
        //   { title: 'Activity', icon: 'mdi-timelapse', link: '/activity' },
        ],
    }),
    computed: {
        // drawer(){
        //     return this.$store.state.drawer;
        // }
    },
    methods: {
        drawerAct(){
            this.drawer = !this.drawer
            this.$store.commit('drawerAct');
        }
    }
}
</script>
<style lang="scss">
    // .appbar {
    //     z-index: 101 !important;
    // }
    #menu {
        font-family: 'Baloo Bhai', cursive;
        background: #3944d3;
        width: 100%;
        height: 100vh;
        position: fixed;
        display: flex;
        transform: translateY(-100%);
        transition: 0.3s ease-in-out;
        z-index: 100;
        
        .container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: column;

            .menuContent {
                width: auto;
                height: auto;
                padding: 10px 20px;
                margin: 10px;

                a {
                    font-size: 48px;
                    font-weight: 900;
                    color: #ffffff;
                    text-decoration: none;
                }
            }
        }
    }
    #menu.show{
        transform: translateY(0);
        transition: 0.3s ease-in-out;
    }
</style>