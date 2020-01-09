<template>
    <v-container grid-list-xs mt-5>
        <h1>Selamat datang</h1>
        <br>

        <v-card flat outlined>
            <v-card-title>
                <v-btn tile color="success" @click="refresh()">refresh Data</v-btn>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>

            <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                    <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                    <v-container>
                        <v-row>
                        <!-- <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                        </v-col> -->
                        </v-row>
                    </v-container>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-tabs
                v-model="tab"
                background-color="deep-purple accent-4"
                dark
                >
                <v-tabs-slider></v-tabs-slider>


                <v-tab href="#tab-1">
                    Data Pending
                </v-tab>

                <v-tab href="#tab-2">
                    Data Peminjaman
                </v-tab>

                <v-tab href="#tab-3">
                    Data Barang
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="i in 3"
                :key="i"
                :value="'tab-' + i"
            >
                <template v-if="i == 1">
                    <v-data-table
                        :headers="headersPending"
                        :items="tableDataPending"
                        :items-per-page="5"
                        :search="search"
                    >
                        <template v-slot:item.action="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                        </template>
                    </v-data-table>
                </template>
                <template v-if="i == 2">
                    <v-data-table
                        :headers="headers"
                        :items="tableData"
                        :items-per-page="5"
                        :search="search"
                    >
                        <template v-slot:item.action="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                        </template>
                    </v-data-table>
                </template>
                <template v-if="i == 3">
                    <v-data-table
                        :headers="headersBarang"
                        :items="tableDataBarang"
                        :items-per-page="5"
                        :search="search"
                    >
                        <template v-slot:item.action="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                        </template>
                    </v-data-table>
                </template>
            </v-tab-item>
            </v-tabs-items>
        </v-card>

    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    layout: 'admin',
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setInfoPage', {titleInfo: 'Admin', headerInfo: store.state.routeMeta.admin})
    },
    created(){
        this.loadPeminjaman();
        this.loadBarang();
    },
    data() {
        return {
            dialog: false,
            search: '',
            barang: null,
            peminjaman: null,
            loading: null,
            tab: null,
            text: 'Lorem ipsum dolor sit am',
            headers: [
                { text: 'NIM', value: 'nim' },
                { text: 'Nama', value: 'nama' },
                { text: 'List Barang', value: 'barang' },
                { text: 'Lama Pinjam', value: 'lamaPinjam' },
                { text: 'Waktu Pinjam', value: 'tanggalPinjam' },
                { text: 'Waktu Pengembalian', value: 'tanggalPengembalian' },
                { text: 'Actions', value: 'action', sortable: false }
            ],
            headersBarang: [
                { text: 'Nama Barang', value: 'namaBarang' },
                { text: 'Stok Barang', value: 'stokBarang' },
                { text: 'Actions', value: 'action', sortable: false }
            ],
            headersPending: [
                { text: 'ID Peminjaman', value: 'idPeminjaman' },
                { text: 'Tgl Expired', value: 'expiredDate' },
                { text: 'Actions', value: 'action', sortable: false }
            ]
        }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
        tableData() {
            let data = []
            if (this.peminjaman != null) {
                this.peminjaman.forEach(element => {
                    let barangString = ""
                    element.listBarang.forEach(b=>{
                        barangString += b.namaBarang+"("+b.jumlah+")" + " / "
                    })
                    data.push({
                        nim: element.user.nimPeminjam,
                        nama: element.user.namaPeminjam,
                        barang: barangString,
                        lamaPinjam: element.lamaPinjam + " Hari",
                        tanggalPinjam: element.startDate,
                        tanggalPengembalian: element.endDate,
                    })
                });
            } 
            return data
        },
        tableDataBarang () {
            let data = []
            if (this.barang != null) {
                this.barang.forEach(element=>{
                    data.push({
                        namaBarang: element.namaBarang,
                        stokBarang: element.stokBarang,
                    })
                })
            }
            return data
        },
        tableDataPending() {
            let data = []
            data.push({idPeminjaman: '3123123', expiredDate: '03-01-2020'})
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
        refresh() {
            this.loadPeminjaman();
            this.loadBarang();
        },
        async loadBarang(){
            const vm = this
            const bash = vm.$store.state.url.bash
            return axios.get(bash+"/api/barang/all").then((res) => {
                vm.barang = res.data.data
            })
        },
        async loadPeminjaman(){
            // const vm = this
            // const bash = vm.$store.state.url.bash
            // return axios.get(bash+"/api/peminjaman").then((res) => {
            //     vm.peminjaman = res.data
            // })
            let data = []
            const ref = this.$fireStore.collection('peminjaman').get().then(docs=>{
                docs.forEach(doc=>{
                    data.push(doc.data())
                })
                this.peminjaman = data
            })
        },
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
            const bash = vm.$store.state.url.bash
            return axios.get(bash+"/api/signout").then((res) => {
                vm.$router.push('/');
            })
        },
        editItem (item) {
            console.log(item)
            this.dialog = true
        },
        deleteItem (item) {
            confirm('Are you sure you want to delete this item?')
        },
        close () {
            this.dialog = false
        },

        save () {
            this.close()
        },
    }
}
</script>