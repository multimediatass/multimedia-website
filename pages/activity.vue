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

        <v-row class="my-5">
            <v-col cols="12" sm="12">
                <v-container grid-list-xs>
                    <v-card flat>
                        <v-container fluid>
                        <v-row>
                            <v-col cols="12" class="mb-5" style="text-align: center">
                                <strong class="headline">Kegiatan Yang Telah<br>Dilaksanakan</strong>
                            </v-col>
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
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>

        <v-row class="my-5">
            <v-col cols="12" sm="12" style="background: #f6f6f6">
                <v-container grid-list-xs>
                    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Title 1</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">Title 2</h2>
          <v-icon
            dark
            size="42"
          >mdi-home-outline</v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
            </v-col>
            <v-col cols="12" md="4">
              Lorem ipsum dolor sit amet, no nam oblique veritus.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Title 3</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="display-1 mr-4 white--text font-weight-light">Title 4</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col class="hidden-sm-and-down" md="2">
              <v-icon size="64">mdi-server-network</v-icon>
            </v-col>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h2 class="display-1 white--text font-weight-light">Title 5</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
                </v-container>
            </v-col>
        </v-row>
    </div>
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