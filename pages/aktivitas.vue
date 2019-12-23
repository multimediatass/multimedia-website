<template>
    <div>
      
        <!-- <v-row>
            <v-col cols="12" md="12" style="background: #f0f0f0">
                <v-container grid-list-xs>
                <v-card
                    flat
                    class="pa-0"
                    style="background: transparent"
                >
                    <v-carousel
                        cycle
                        hide-delimiter-background
                        class="responsive-media"
                    >
                        <v-carousel-item
                            v-for="(slide, i) in slides"
                            :key="i"
                            src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                        >
                            
                        </v-carousel-item>
                    </v-carousel>
                  
                </v-card>
                </v-container>
            </v-col>
        
        </v-row> -->

        <div v-if="aktivitas.length != 0">
        <v-container grid-list-xs>
        <v-row class="my-5">
            <v-col cols="12" sm="12">
                <v-card flat>
                    <v-container fluid>
                    <v-row>
                        <v-col cols="12" class="mb-5" style="text-align: center">
                            <strong class="headline">Coming Soon Content</strong>
                        </v-col>
                        <!-- <v-col
                        v-for="p in product"
                        :key="p.idProduk"
                        class="d-flex child-flex"
                        cols="12"
                        xl="4"
                        lg="4"
                        md="6"
                        sm="6"
                        xs="12"
                        >
                        <v-card
                            class="mx-auto"
                            outlined
                        >

                            <v-carousel
                                hide-delimiters
                                continuous="true"
                                :cycle="true"
                                :show-arrows="p.media.length > 1"
                                transition="fade-transition"
                                class="grey lighten-2 responsive-media-card"
                            >
                                <v-carousel-item
                                    v-for="(m, index) in p.media"
                                    :key="i"
                                    :src="m"
                                    :lazy-src="m"
                                >
                                </v-carousel-item>
                            </v-carousel>

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
                                    :to="`product/`+p.idProduk"
                                >
                                    Baca Selengkapnya
                                </v-btn>

                            <v-spacer></v-spacer>

                            </v-card-actions>

                        </v-card>
                        </v-col> -->
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        </v-container>
        </div>

        <v-container grid-list-xs v-else>
            <notFound msg="Tidak ada aktivitas yang bisa ditampilkan"/>
        </v-container>

    </div>
</template>
<script>
import { Stack, StackItem } from "vue-stack-grid";
import notFound from '@/components/notFound'

  export default {
    components: { 
        notFound,
        Stack, 
        StackItem 
    },
    data: () => ({
        show: false,
        images: [
          {url:'https://id.nuxtjs.org/async-data-with-nuxtjs.png', alt_description: 'HEHHE'},
          {url:'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', alt_description: 'HEHHE'},
          {url:'https://images.unsplash.com/photo-1576342036857-099fbc378aec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80', alt_description: 'HEHHE'},
          {url:'https://images.unsplash.com/photo-1576424553167-10c4d8812df1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', alt_description: 'HEHHE'},
          {url:'https://images.unsplash.com/photo-1576457743426-842299a74074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', alt_description: 'HEHHE'},
          {url:'https://images.unsplash.com/photo-1576368442947-0fa94ce4d613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80', alt_description: 'HEHHE'},

        ],
        colors: [
            'green',
            'secondary',
            'yellow darken-4',
            'red lighten-2',
            'orange darken-1',
        ],
        cycle: false,
        slides: [
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',
        ],
        items: [
            {
                title: 'Recruitment Aslab',
                subtitle: 'Oprec Aslab Multimedia FIT',
                color: 'red lighten-2',
                icon: 'mdi-star',
                soon: false
            },
            {
                title: 'Grand Opening Blablabla',
                subtitle: 'Blablabla',
                color: 'purple darken-1',
                icon: 'mdi-book-variant',
                soon: false
            },
            {
                title: 'Ending uhuhuh',
                subtitle: 'Ehehehe',
                color: 'green lighten-1',
                icon: 'mdi-airballoon',
                soon: true
            },
        ],
    }),
    computed: {
        aktivitas() {
            let data = [
                // {idProduk: 'produk_1', namaProduk: 'Produk 1', descProduk: 'Ini produk pertama kami', media: ["https://images.unsplash.com/photo-1495510096779-5fbe73258c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"]},
                // {idProduk: 'produk_2', namaProduk: 'Produk 2', descProduk: 'Ini produk kedua kami', media: ["https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80", "https://images.unsplash.com/photo-1495510096779-5fbe73258c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"]},
                // {idProduk: 'produk_3', namaProduk: 'Produk 3', descProduk: 'Ini produk ketiga kami', media: ["https://images.unsplash.com/photo-1488376986648-2512dfc6f736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"]}
            ]
            return data
        }
    },
  }
</script>