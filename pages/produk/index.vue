<template>
    <v-container grid-list-xs>

        <cardView imgPosition="left" title="Produk Lab" subtitle="Multimedia Research Laboratory FIT" tag="#produk" link='' :image="[require('@/assets/img/svg/undraw_apps_m7mh.svg')]" media="images" :contain="true"/>
        <v-layout row wrap v-if="posts.length != 0">
            <v-flex xs12 sm12 md6 lg6 xl4 v-for="(p, index) in posts" :key="p.fields.title + index" pa-0 py-2 pa-sm-2 pa-md-4>
            <v-card
                class="mx-auto"
                flat
                outlined
                style="border-bottom: 5px solid #2B2F8E !important"
            >
                <v-carousel
                    v-if="p.fields.cover.length != 0"
                    hide-delimiters
                    :continuous="true"
                    :cycle="true"
                    :show-arrows="p.fields.cover.length > 1"
                    transition="fade-transition"
                    class="grey lighten-2 responsive-media-card"
                >
                    <v-carousel-item
                        v-for="(m, index) in p.fields.cover"
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
                    {{p.fields.title}}
                </v-card-title>

                <v-card-subtitle>
                    {{p.fields.description}}
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn
                        color="purple"
                        text
                        :to="`produk/`+p.sys.id"
                    >
                        Baca Selengkapnya
                    </v-btn>

                <v-spacer></v-spacer>

                </v-card-actions>

            </v-card>
            </v-flex>
        </v-layout>
        <notFound msg="Tidak ada produk yang bisa ditampilkan " v-else/>

    </v-container>
</template>
<script>
import notFound from '@/components/notFound'
import cardView from '@/components/cardView'

import {createClient} from '~/plugins/contentful.js'
const client = createClient()

export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setLoading', true)
        return Promise.all([
            // fetch the owner of the blog
            client.getEntries({
            'sys.id': ""
            }),
            // fetch all blog posts sorted by creation date
            client.getEntries({
            'content_type': "product",
            order: '-sys.createdAt'
            })
        ]).then(([entries, posts]) => {
            // return data that should be available
            // in the template
            return {
            person: entries.items[0],
            posts: posts.items
            }
        }).catch(console.error)
        .finally(end=>{
            store.dispatch('setInfoPage', {titleInfo: 'Produk', headerInfo: store.state.routeMeta.produk})
            store.dispatch('setLoading', false)
        })
    },
    data: () => ({
        
    }),
    computed: {
        product() {
            let data = [
                // {idProduk: 'produk_id', namaProduk: 'Produk Name', descProduk: 'Ini Produk Multimedia', media: [], link: 'produk_1'},
                // {idProduk: 'produk_id', namaProduk: 'Produk Name', descProduk: 'Ini Produk Multimedia', media: [], link: 'produk_2'},
                // {idProduk: 'produk_id', namaProduk: 'Produk Name', descProduk: 'Ini Produk Multimedia', media: [], link: 'produk_3'},
            ]
            return data
        }
    },
    components: {
        notFound,
        cardView
    }
}
</script>