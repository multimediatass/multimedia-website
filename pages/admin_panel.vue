<template>
    <v-container grid-list-xs>
        <h1>Login As Admin</h1>
        <br>
        <v-btn @click="logout">Logout</v-btn>
        <br><br>
        <v-data-iterator
            :items="tableData"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
        >
            <template v-slot:header>
                <v-toolbar
                dark
                color="blue darken-3"
                class="mb-1"
                >
                <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                ></v-text-field>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                    <v-spacer></v-spacer>
                    <v-select
                    v-model="sortBy"
                    flat
                    solo-inverted
                    hide-details
                    :items="keys"
                    prepend-inner-icon="mdi-magnify"
                    label="Sort by"
                    ></v-select>
                    <v-spacer></v-spacer>
                    <v-btn-toggle
                    v-model="sortDesc"
                    mandatory
                    >
                    <v-btn
                        large
                        depressed
                        color="blue"
                        :value="false"
                    >
                        <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn
                        large
                        depressed
                        color="blue"
                        :value="true"
                    >
                        <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                    </v-btn-toggle>
                </template>
                </v-toolbar>
            </template>

            <template v-slot:default="props">
                <v-row>
                <v-col
                    v-for="item in props.items"
                    :key="item.nim"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                >
                    <v-card>
                    <v-card-title class="subheading font-weight-bold">{{ item.nim }}</v-card-title>

                    <v-divider></v-divider>

                    <v-list dense>
                        <v-list-item
                            v-for="(key, index) in filteredKeys"
                            :key="index"
                        >
                        
                        <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                        <v-list-item-content v-if="key != 'Barang'" class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                        <template v-else>
                            <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">
                                <span v-for="(b, index) in item[key.toLowerCase()]" >{{(index+1) +'. '+ b.namaBarang}}</span>
                            </v-list-item-content>
                        </template>
                        
                        </v-list-item>
                    </v-list>
                    </v-card>
                </v-col>
                </v-row>
            </template>

            <template v-slot:footer>
                <v-row class="mt-2" align="center" justify="center">
               

                <v-spacer></v-spacer>

                <span
                    class="mr-4
                    grey--text"
                >
                    Page {{ page }} of {{ numberOfPages }}
                </span>
                <v-btn
                    fab
                    dark
                    color="blue darken-3"
                    class="mr-1"
                    @click="formerPage"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                    fab
                    dark
                    color="blue darken-3"
                    class="ml-1"
                    @click="nextPage"
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                </v-row>
            </template>
            </v-data-iterator>

    </v-container>
</template>
<script>
import axios from 'axios'
// const bash = "https://multimedia-site.herokuapp.com"
const bash = "http://localhost:3000"

export default {
    asyncData({ params, error }) {
        return axios.get(bash+"/api/peminjaman").then((res) => {
            return { peminjaman: res.data }
        })
    },
    data() {
        return {
            itemsPerPageArray: [4, 8, 12],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 4,
            sortBy: 'Nama',
            keys: [
                'Nim',
                'Nama',
                'Barang',
                'Durasi'
            ],
        }
    },
    computed: {
        tableData() {
            var data = []
            this.peminjaman.forEach(element => {
                data.push({
                    nim: element.user.nimPeminjam,
                    nama: element.user.namaPeminjam,
                    barang: element.listBarang,
                    durasi: element.lamaPinjam + " Hari"
                })
            });
            return data
        },
        numberOfPages () {
            return Math.ceil(this.tableData.length / this.itemsPerPage)
        },
        filteredKeys () {
            return this.keys.filter(key => key !== `Name`)
        },
    },
    methods: {
        nextPage () {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage (number) {
            this.itemsPerPage = number
        },
        logout() {
            const vm = this
            const url = vm.$store.state.url
            return axios.get(bash+"/api/signout").then((res) => {
                vm.$router.push('/');
            })
        }
    }
}
</script>