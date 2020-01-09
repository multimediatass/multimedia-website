<template>
     <v-container grid-list-xs>
        
        <cardView imgPosition="left" title="Lab Mulmed FIT" subtitle="Ngapain aja sih?" tag="#aktivitas" link='' :image="[require('@/assets/img/svg/undraw_fitting_piece_iilo.svg')]" media="images" :contain="true"/>
        <v-layout row wrap v-if="aktivitas.length != 0">
            <v-flex xs12 sm12 md6 lg6 xl4 v-for="(p, index) in aktivitas" :key="p.idProduk + index" pa-0 py-2 pa-sm-2 pa-md-4>
            <v-card
                class="mx-auto"
                flat
                outlined
                style="border-bottom: 5px solid #2B2F8E !important"
            >
                <v-carousel
                    v-if="p.media.length != 0"
                    hide-delimiters
                    :continuous="true"
                    :cycle="true"
                    :show-arrows="p.media.length > 1"
                    transition="fade-transition"
                    class="grey lighten-2 responsive-media-card"
                >
                    <v-carousel-item
                        v-for="(m, index) in p.media"
                        :key="index"
                        :src="m"
                        :lazy-src="m"
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
                    {{p.namaProduk}}
                </v-card-title>

                <v-card-subtitle>
                    {{p.descProduk}}
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn
                        color="purple"
                        text
                        :to="`aktivitas/`+p.link"
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
export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setInfoPage', {titleInfo: "Aktivitas", headerInfo: store.state.routeMeta.aktivitas})
    },
    components: { 
        notFound,
        cardView
    },
    computed: {
        aktivitas() {
            let data = [
                {idProduk: 'aktivitas_id', namaProduk: 'Aktivitas Name', descProduk: 'Ini Aktivitas Multimedia', media: [], link: 'aktivitas_1'},
                {idProduk: 'aktivitas_id', namaProduk: 'Aktivitas Name', descProduk: 'Ini Aktivitas Multimedia', media: [], link: 'aktivitas_2'},
            ]
            return data
        }
    },
}
</script>