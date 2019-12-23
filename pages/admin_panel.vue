<template>
    <v-container grid-list-xs mt-5>
        <h1>Selamat datang</h1>
        <br>
        <v-btn @click="logout">Logout</v-btn>
        <br><br>
        
        <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            dark
            >
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-1">
                    Data Peminjaman
                </v-tab>

                <v-tab href="#tab-2">
                    Data Barang
                </v-tab>
            </v-tabs>

        <v-card flat outlined>
            <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="i in 2"
                :key="i"
                :value="'tab-' + i"
            >
                <template v-if="i == 1">
                    <v-data-table
                        :headers="headers"
                        :items="tableData"
                        :items-per-page="5"
                    ></v-data-table>
                </template>
                <template v-if="i == 2">
                    <v-data-table
                        :headers="headersBarang"
                        :items="tableDataBarang"
                        :items-per-page="5"
                    ></v-data-table>
                </template>
            </v-tab-item>
            </v-tabs-items>
        </v-card>

    </v-container>
</template>
<script>
import axios from 'axios'
const bash = "https://multimedia-site.herokuapp.com"
// const bash = "http://localhost:3000"

export default {
    created(){
        this.loadPeminjaman();
        this.loadBarang();
    },
    data() {
        return {
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
            ],
            headersBarang: [
                { text: 'Nama Barang', value: 'namaBarang' },
                { text: 'Stok Barang', value: 'stokBarang' },
            ],
        }
    },
    computed: {
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
        numberOfPages () {
            return Math.ceil(this.tableData.length / this.itemsPerPage)
        },
        filteredKeys () {
            return this.keys.filter(key => key !== `Name`)
        },
    },
    methods: {
        async loadBarang(){
            const vm = this
            return axios.get(bash+"/api/barang/all").then((res) => {
                vm.barang = res.data
            })
        },
        async loadPeminjaman(){
            const vm = this
            return axios.get(bash+"/api/peminjaman").then((res) => {
                vm.peminjaman = res.data
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
            const url = vm.$store.state.url
            return axios.get(bash+"/api/signout").then((res) => {
                vm.$router.push('/');
            })
        }
    }
}
</script>