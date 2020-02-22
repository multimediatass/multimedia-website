<template>
    <v-container grid-list-xs mt-5>
        <h1>Selamat datang</h1>

    </v-container>
</template>
<script>
// import axios from 'axios'

export default {
    layout: 'admin',
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setInfoPage', {titleInfo: 'Admin', headerInfo: store.state.routeMeta.admin})
    },
    data() {
        return {
            dialog: false,
            loading: null,
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