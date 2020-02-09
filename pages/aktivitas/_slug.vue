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
                    v-if="person.fields.cover.length != 0"
                    hide-delimiters
                    :continuous="true"
                    :cycle="true"
                    :show-arrows="person.fields.cover.length > 1"
                    transition="fade-transition"
                    class="grey lighten-2"
                    height="480"
                >
                    <v-carousel-item
                        v-for="(m, index) in person.fields.cover"
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
                class="grey lighten-2"
                height="480"
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

                <v-card-title class="title">
                    {{person.fields.title}}
                </v-card-title>

                <v-card-subtitle class="subtitle-1">
                    {{person.fields.description}}
                </v-card-subtitle>

                <v-divider></v-divider>

                <v-card-text class="body-2" v-if="person.fields.content">
                    <template v-if="person.fields.media">
                        <v-card
                            max-width="500"
                            max-height="500"
                            outlined
                        >
                            <v-carousel
                            hide-delimiters
                            :continuous="true"
                            :cycle="false"
                            :show-arrows="person.fields.media.length > 1"
                            transition="fade-transition"
                            class="grey lighten-2"
                            height="300"
                            width="100%"
                            >
                            <v-carousel-item
                                v-for="(m, index) in person.fields.media"
                                :key="index"
                                :src="m.fields.file.url"
                                :lazy-src="m.fields.file.url"
                            >
                            </v-carousel-item>
                            </v-carousel>
                        </v-card>
                        <br><v-divider></v-divider><br>
                    </template>

                    <RichTextRenderer :document="person.fields.content"/>
                </v-card-text>

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
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
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
            'content_type': "aktivitas",
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
            store.dispatch('setInfoPage', {titleInfo: data.fields.title, headerInfo: {title: data.fields.title, subtitle: data.fields.description, fullHeight: false}})
            store.dispatch('setLoading', false)
        })

        // return client
        // .getEntry(params.slug)
        // .then(entry => {
        //   const rawRichTextField = entry.fields.body;
        //   return documentToHtmlString(rawRichTextField);
        // })
        // .then(renderedHtml => {
        //   // do something with html, like write to a file
        //   console.log(renderedHtml);
        // })
        // .catch(error => console.log(error));
    },
    components: {
        RichTextRenderer
    },
    methods: {
        cek(text){
            console.log(text)
        }
    }
}
</script>