<template>
    <div>
        <v-container grid-list-xs style="margin-top: -100px" v-if="barang.length != 0 && done != true">
        <v-layout row wrap justify-center>

            <v-flex xs12 lg8 xl6>
            <v-card class="pa-1 pa-md-5" outlined>
                <v-card-title primary-title>
                    Info Peminjaman
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <v-form
                    ref="form"
                    v-model="valid"
                    :lazy-validation="lazy"
                >
                    <v-text-field
                        v-model="name"
                        label="Nama"
                        :rules="[v => !!v || 'Nama tidak boleh kosong']"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="nim"
                        type="number"
                        label="NIM/NIP"
                        :rules="[v => !!v || 'NIM/NIP tidak boleh kosong']"
                        required
                    ></v-text-field>

                    <v-select
                        v-model="listBarang"
                        :items="barang"
                        item-text="namaBarang"
                        :rules="[v => !!v || 'Barang tidak boleh kosong']"
                        label="Pilih barang"
                        required
                        multiple
                        chips
                        return-object
                    ></v-select>

                    <v-flex xs12 lg12>
                        <v-layout row wrap>
                            <v-flex xs12 lg6 xl6 v-for="(item, index) in listBarang" pa-1 :key="index">
                                <v-card outlined>
                                    <v-card-text>
                                        
                                        <v-list-item three-line>
                                            <v-list-item-content>
                                                <div class="overline mb-4">Barang {{index+1}}</div>
                                                <v-list-item-title class="headline mb-1">{{item.namaBarang}}</v-list-item-title>
                                                <v-list-item-subtitle>Tersedia: {{item.stokBarang}}</v-list-item-subtitle>
                                                <v-text-field
                                                    v-model="item.jumlah"
                                                    class="mt-6 pt-0"
                                                    label="Jumlah yang dipinjam: "
                                                    type="number"
                                                    :max="item.stokBarang"
                                                    min="1"
                                                    :rules="[v => !!v || 'Jumlah barang tidak boleh kosong']"
                                                    required
                                                ></v-text-field>
                                            </v-list-item-content>

                                            <!-- <v-list-item-avatar
                                                tile
                                                size="75"
                                                color="grey"
                                                class="hidden"
                                            ></v-list-item-avatar> -->
                                        </v-list-item>

                                        <!-- <v-slider
                                            v-model="item.jumlah"
                                            ticks="always"
                                            tick-size="6"
                                            label="Jumlah barang"
                                            persistent-hint
                                            step="1"
                                            thumb-label="always"
                                            :max="item.stok"
                                            min="1"
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                    v-model="item.jumlah"
                                                    class="mt-0 pt-0"
                                                    hide-details
                                                    single-line
                                                    type="number"
                                                    style="width: 60px"
                                                    :max="item.stok"
                                                    min="1"
                                                ></v-text-field>
                                                <p>Buah</p>
                                            </template>
                                        </v-slider> -->

                                    </v-card-text>

                                </v-card>              
                            </v-flex>
                        </v-layout>
                    </v-flex>

                    <br>
                    <v-divider></v-divider>
                    <br>
                    
                    <v-select
                    :class="listBarang.length != 0 ? 'mt-4' : ''"
                    v-model="durasi"
                    :items="maxDurasiArr"
                    label="Durasi / Lama Pinjam"
                    ></v-select>

                    <v-textarea
                        v-model="catatan"
                        label="Catatan"
                        rows="2"
                        auto-grow
                        counter="40"
                        maxlength="40"
                    ></v-textarea>

                    <br/>

                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                    >
                        Submit
                    </v-btn>

                </v-form>
                </v-card-text>
            </v-card>
            </v-flex>
            
        </v-layout>
        <v-snackbar
            v-model="snackbar"
            :color="colorSnackbar"
        >
        {{ text }}
        <v-btn
            text
            @click="snackbar = false"
        >
            Close
        </v-btn>
        </v-snackbar>
        </v-container>

        <v-container grid-list-xs v-else-if="done == true">
            <status type="success" icon="mdi-check" :msg="{title: 'Peminjaman berhasil dilakukan', subtitle: 'Silahkan konfirmasi onsite di lab yaa..'}"/>
        </v-container>
        <v-container grid-list-xs v-else>
            <notFound msg="Maaf, Barang sudah dipinjam semua"/>
        </v-container>

        <div class="loading" :class="[loading == true ? 'show': '']">
            <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
            ></v-progress-circular>
            <br>
            <h3>Peminjaman sedang diproses..</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import {fire, db} from '@/plugins/firebase'
import vuefire from 'vuefire'
import notFound from '@/components/notFound'
import status from '@/components/status'

const bash = "https://multimedia-site.herokuapp.com"
// const bash = "http://localhost:3000"

export default {
    asyncData({ params, error }) {
        return axios.get(bash+"/api/barang").then((res) => {
            return { barang: res.data }
        })
    },
    created(){

    },
     data: () => ({
        snackbar: false,
        colorSnackbar: null,
        valid: true,
        name: '',
        nim: '',
        email: '',
        catatan: '',
        maxDurasi: 3,
        durasi: 1,
        listBarang: [],
        lazy: false,
        dataObj: null,
        obj: [],
        loading: false,
        done: null
    }),
    computed: {
        maxDurasiArr(){
            var data = [];
            for(let i = 1; i <= this.maxDurasi; i++) {
                data.push(i + " Hari");
            }
            return data;
        },
    },
    methods: {
        sweetAlert(type, title, subtitle){
            this.$swal.fire(
                title,
                subtitle,
                type
            )
        },
        validate () {
            if (this.$refs.form.validate()) {
                let durasi = parseInt(this.durasi.split(" ")[0])

                var start = moment()
                var end = moment(start).add(durasi, 'days')

                const dataObj = {
                    user: {
                        namaPeminjam: this.name,
                        nimPeminjam: this.nim,
                        emailPeminjam: this.email
                    },
                    listBarang: [],
                    lamaMeminjam: durasi,
                    startDate: start.format('L'),
                    endDate: end.format('L')
                }
                this.listBarang.forEach(barang=>{
                    if (barang.jumlah <= 0) {
                        return false
                    }else {
                        dataObj.listBarang.push({
                            id: barang.id,
                            namaBarang: barang.namaBarang,
                            jumlah: barang.jumlah
                        })
                    }
                })
                
                if (dataObj.listBarang.length > 0) {
                    this.dataObj = dataObj
                    this.peminjamanAct(dataObj)
                    // var bodyFormData = new FormData();  
                    // bodyFormData.set('obj', dataObj)
                    // this.$store.commit('addPeminjaman',dataObj)
                }else {
                    // this.colorSnackbar = "error"
                    // this.text = "Barang tidak boleh Kosong"
                    // this.snackbar = true
                    this.sweetAlert("error", "Barang tidak boleh kosong", "Pastikan anda memilih barang")
                }

            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        peminjamanAct(req) {
            const vm = this
            const url = vm.$store.state.url
            vm.loading = true
            axios({
                method: 'post',
                url: bash+"/api/peminjaman",
                data: {
                    detailData: req
                }
            }).then(res=>{
                // vm.colorSnackbar = "success"
                // vm.text = "Berhasil meminjam, silahkan konfirmasi onsite di Lab Multimedia FIT yaa.."
                // vm.snackbar = true
                // vm.sweetAlert("success", "Berhasil meminjam barang", "Silahkan konfirmasi onsite di Lab Multimedia ya..")
                vm.reset()
                vm.done = true
            }).catch(err=>{
                // vm.colorSnackbar = "error"
                // vm.text = "Gagal meminjam"
                // vm.snackbar = true
                vm.sweetAlert("error", "Gagal meminjam", "Ada kesalahan input")
            }).finally(()=>{
                vm.loading = false
            })
        }
    },
    components: {
        notFound,
        status
    }
}
</script>
<style lang="scss">
    .loading {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 100;
        width: 100%;
        height: 100vh;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        opacity: 0;
        transition: 0.3s ease-out;
    }
    .loading.show {
        opacity: 1;
        top: 0;
        transition: 0.3s ease-out;
    }
</style>