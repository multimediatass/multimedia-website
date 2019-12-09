<template>
    <v-container grid-list-xs>
        <!-- <v-row class="hidden-md-and-down">

            <v-col cols="12" md="6">
                <v-card flat class="pa-0 pa-md-5">
                    <v-img
                        :src="require('@/assets/undraw_product_tour_foyt.svg')"
                        :lazy-src="require('@/assets/undraw_product_tour_foyt.svg')"
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
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card flat class="pa-0 pa-md-5">
                    <v-card-title primary-title>
                        <h1 class="display-1">Title</h1>
                    </v-card-title>
                    <v-card-text>
                        <p class="title">Subtitle</p>
                    </v-card-text>

                </v-card>
            </v-col>
        
        </v-row> -->
        <v-row>
            <v-col cols="12" sm="12">
            <v-card flat>
                <v-container fluid>
                <v-row>
                    <!-- <v-col cols="12">
                        <h1>Produk Kami</h1>
                    </v-col> -->
                    <v-col
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
                        <!-- <v-img
                        :src="p.media[0]"
                        :lazy-src="p.media[0]"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        height="240"
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
                        </v-img> -->

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

                        <!-- <v-list two-line>
                        <v-list-item>
                            <v-list-item-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                            <v-list-item-subtitle>Author</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                          
                            </v-list-item-action>
                        </v-list-item>
                        </v-list>

                        <v-divider></v-divider> -->

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
                    </v-col>
                </v-row>
                </v-container>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
        show: false,
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
    }),
    computed: {
        product() {
            let data = [
                {idProduk: 'produk_1', namaProduk: 'Produk 1', descProduk: 'Ini produk pertama kami', media: ["https://images.unsplash.com/photo-1495510096779-5fbe73258c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"]},
                {idProduk: 'produk_2', namaProduk: 'Produk 2', descProduk: 'Ini produk kedua kami', media: ["https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80", "https://images.unsplash.com/photo-1495510096779-5fbe73258c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"]},
                {idProduk: 'produk_3', namaProduk: 'Produk 3', descProduk: 'Ini produk ketiga kami', media: ["https://images.unsplash.com/photo-1488376986648-2512dfc6f736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"]}
            ]
            return data
        }
    }
  }
</script>