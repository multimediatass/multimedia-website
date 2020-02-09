<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>

        <v-list-item
          @click.stop="miniVariant = !miniVariant"
        >
          <v-list-item-action>
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Mini Variant</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
         
          router
          exact
        >
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> -->
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      class="appBar"
      color="deep-purple accent-4"
      dark
      height="65"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title><nuxt-link to="/" style="text-decoration: none; color: #ffffff">{{title}}</nuxt-link></v-toolbar-title>
      <v-spacer />
      <v-btn @click="logout()" outlined tile class="mr-3">
        Logout
      </v-btn>

      <!-- <v-menu
        :close-on-content-click="false"
        offset-x
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            fab
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                 <v-switch
                    v-model="$vuetify.theme.dark"
                    color="primary"
                  ></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable Dark Theme</v-list-item-title>
            </v-list-item>

          </v-list>
      </v-menu> -->

    </v-app-bar>

    <v-content style="margin-bottom: 70px">
      <nuxt />
    </v-content>

    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data: vm => ({
      activeBtn: 1,
      clipped: true,
      drawer: null,
      fixed: false,
      miniVariant: true,
      title: 'Admin Panel'
  }),
  computed: {
      loading() {
        return this.$store.state.loading
        }
  },
  methods: {
    logout() {
        const vm = this
        const bash = vm.$store.state.url.bash
        return axios.get(bash+"/api/signout").then((res) => {
            vm.$router.push('/');
        })
    }
  }
}
</script>
<style lang="scss">
.appBar {
  box-shadow: 0 4px 10px rgba(0,0,0,.1) !important;
  -webkit-box-shadow: 0 4px 10px rgba(0,0,0,.1) !important;
}
</style>