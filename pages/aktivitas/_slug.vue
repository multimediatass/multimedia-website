<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12>
                <!-- <h1>{{this.$route.name}}</h1> -->
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setInfoPage', {titleInfo: params.slug, headerInfo: {title: params.slug, subtitle: '', fullHeight: false}})
    },
}
</script>