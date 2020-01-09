<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 pa-0 py-2 pa-sm-2 pa-md-4>
            <v-card
                class="mx-auto"
                flat
                outlined
                style="border-bottom: 5px solid #2B2F8E !important"
            >
                <v-carousel
                    v-if="person.fields.media.length != 0"
                    hide-delimiters
                    :continuous="true"
                    :cycle="true"
                    :show-arrows="person.fields.media.length > 1"
                    transition="fade-transition"
                    class="grey lighten-2 responsive-media-card"
                >
                    <v-carousel-item
                        v-for="(m, index) in person.fields.media"
                        :key="index"
                        :src="m.fields.file.url"
                        :lazy-src="m.fields.file.url"
                    >
                    </v-carousel-item>
                </v-carousel>

                <v-img
                v-else
                :src="require('@/assets/img/bg/404.png')"
                :lazy-src="require('@/assets/img/bg/404.png')"
                transition="fade-transition"
                class="grey lighten-2 responsive-media-card"
                >
                <template v-slot:placeholder>
                    <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                    >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
                </v-img>

                <v-card-title>
                    {{person.fields.title}}
                </v-card-title>

                <v-card-subtitle>
                    {{person.fields.description}}
                </v-card-subtitle>

                <v-card-actions>

                <v-spacer></v-spacer>

                </v-card-actions>

            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import {createClient} from '~/plugins/contentful.js'
const client = createClient()

export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setLoading', true)
        let data = ""
        return Promise.all([
            // fetch the owner of the blog
            client.getEntries({
            'sys.id': params.slug
            }),
            // fetch all blog posts sorted by creation date
            client.getEntries({
            'content_type': "product",
            order: '-sys.createdAt'
            })
        ]).then(([entries, posts]) => {
            // return data that should be available
            // in the template

            data = entries.items[0]

            return {
                person: entries.items[0],
                posts: posts.items
            }
        }).catch(console.error)
        .finally(end=>{
            store.dispatch('setInfoPage', {titleInfo: data.fields.title, headerInfo: {title: data.fields.title, subtitle: '', fullHeight: false}})
            store.dispatch('setLoading', false)
        })
    },
}
</script>