<template>
    <v-container grid-list-xs>
      
        <v-layout row wrap v-if="product.length != 0">
            <v-flex xs12 sm12 md6 lg6 xl4 v-for="p in product" :key="p.idProduk" pa-0 py-2 pa-sm-2 pa-md-4>
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
            </v-flex>
        </v-layout>
        <notFound msg="Tidak ada produk yang bisa ditampilkan " v-else/>

    </v-container>
</template>
<script>
import notFound from '@/components/notFound'
  export default {
    data: () => ({
        
    }),
    computed: {
        product() {
            let data = [
                // {idProduk: 'pixel_salary', namaProduk: 'Pixel Salary', descProduk: 'Aplikasi Penggajian', media: [require('@/assets/img/bg1.jpg'), require('@/assets/img/bg2.jpg')]},
                // {idProduk: 'sertifikat_simple', namaProduk: 'Input Sertifikat', descProduk: 'Aplikasi Memudahkan Input Data Sertifikat', media: [require('@/assets/img/product/3.png')]},
                // {idProduk: 'drone', namaProduk: 'Drone', descProduk: 'Drone Multimedia', media: ["https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80"]},
            ]
            return data
        }
    },
    components: {
        notFound
    }
  }
</script>