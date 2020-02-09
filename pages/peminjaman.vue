<template>
    <div>
        <v-container grid-list-xs style="margin-top: -100px" v-if="barang.length != 0 && done != true && status == 200">
        <v-layout row wrap justify-center>

            <v-flex xs12 lg4 xl4 v-if="history.length > 0" class="pa-0 pa-md-1 mb-2">
                <v-card class="pa-1 pa-md-5" outlined>
                    <v-card-title primary-title>
                        History Peminjaman
                        <v-spacer></v-spacer>
                        <v-btn small color="error" @click="dialog = true"><v-icon left>mdi-tray-remove</v-icon> Clear</v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="max-height: 400px; overflow-y: auto" >
                        <ul>
                            <li class="my-1" v-for="(h, index) in history" :key="index">ID: <b><span style="background: blue; color: #ffffff">{{h.id}}</span></b><br>Submit At: <b>{{h.submitAt}}</b></li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 lg8 xl8 class="pa-0 pa-md-1">
            <v-card class="pa-1 pa-md-5" outlined :disabled="loading || done">
                <v-card-title primary-title>
                    Info Peminjaman
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        :counter="30"
                        maxlength="30"
                        label="Nama Peminjam"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                    ></v-text-field>

                    <v-text-field
                        v-model="nim"
                        type="number"
                        label="NIM/NIP"
                        :error-messages="nimErrors"
                        :counter="11"
                        maxlength="11"
                        required
                        @input="$v.nim.$touch()"
                        @blur="$v.nim.$touch()"
                    ></v-text-field>

                    <v-select
                        v-model="listBarang"
                        :items="barang"
                        item-text="namaBarang"
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
        </v-container>

        <v-container grid-list-xs v-else-if="status == 400">
            <notFound :msg="message"/>
            <v-flex xs12 v-if="history.length > 0" class="pa-0 pa-md-1 mb-2">
                <br>
                <v-card class="pa-1 pa-md-5" outlined>
                    <v-card-title primary-title>
                        History Peminjaman
                        <v-spacer></v-spacer>
                        <v-btn small color="error" @click="dialog = true"><v-icon left>mdi-tray-remove</v-icon> Clear</v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="max-height: 400px; overflow-y: auto" >
                        <ul>
                            <li class="my-1" v-for="(h, index) in history" :key="index">ID: <b><span style="background: blue; color: #ffffff">{{h.id}}</span></b><br>Submit At: <b>{{h.submitAt}}</b></li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-container>
        <v-container grid-list-xs v-else-if="done == true">
            <status type="success" icon="mdi-check" :msg="{title: 'Peminjaman berhasil dilakukan', code: idPeminjaman, subtitle: 'Lakukan konfirmasi sebelum <b>'+expiredAfter+'</b>'}"/>
        </v-container>
        <v-container grid-list-xs v-else>
            <notFound msg="Maaf, Barang sudah dipinjam semua"/>
            <v-flex xs12 v-if="history.length > 0" class="pa-0 pa-md-1 mb-2">
                <br>
                <v-card class="pa-1 pa-md-5" outlined>
                    <v-card-title primary-title>
                        History Peminjaman
                        <v-spacer></v-spacer>
                        <v-btn small color="error" @click="dialog = true"><v-icon left>mdi-tray-remove</v-icon> Clear</v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="max-height: 400px; overflow-y: auto" >
                        <ul>
                            <li class="my-1" v-for="(h, index) in history" :key="index">ID: <b><span style="background: blue; color: #ffffff">{{h.id}}</span></b><br>Submit At: <b>{{h.submitAt}}</b></li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-container>


        <div class="loading" :class="[loading == true ? 'show': '']">
            <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
            <br>
            <h3>Peminjaman sedang diproses..</h3>
        </div>

        <v-snackbar v-model="snackbar.status" :color="snackbar.color" right>
            <span v-html="snackbar.message"></span>
            <v-btn text @click="snackbar.status = false">Close</v-btn>
        </v-snackbar>

        <v-dialog
            v-model="dialog"
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline">Bersihkan History?</v-card-title>

                <v-card-text>
                Pastikan ID Peminjaman sudah kamu catat ya. Kamu yakin ingin membersihkannya?
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Batal
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="exeClearHistory()"
                >
                    Ya, Bersihkan
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import notFound from '@/components/notFound'
import status from '@/components/status'

import { validationMixin } from 'vuelidate'
import { required, email, maxLength, minLength, numeric } from 'vuelidate/lib/validators'

export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        return redirect('/')
        
        const bash = store.state.url.bash
        store.dispatch('setLoading', true)

        let history = []
        let getHistory = localStorage.getItem('historyPeminjaman')
        if (Array.isArray(JSON.parse(getHistory))) {
            history = store.getters.historyPeminjaman
        }

        return axios.get(bash+"/api/barang/ready").then((res) => {
            const obj = res.data
            const status = res.status
            if (res.success == false) return { barang: [], status: status, message: obj.data.message, history: history}
            return { barang: obj.data, status: status, history: history}
        }).catch((err)=>{
            const obj = err.response
            const status = obj.status
            return { barang: [], status: status, message: obj.data.data.message, history: history}
        }).finally((end)=>{
            store.dispatch('setInfoPage', {titleInfo: 'Peminjaman', headerInfo: store.state.routeMeta.peminjaman})
            store.dispatch('setLoading', false)
        })
    },
    mixins: [validationMixin],
    validations: {
        name: { required, maxLength: maxLength(30), minLength: minLength(3) },
        nim: { required, maxLength: maxLength(11), numeric, minLength: minLength(5) },
        listBarang: { required }
    },
    data: () => ({
        snackbar: {status: false,message: '',color: ''},
        name: '',
        nim: '',
        email: '',
        catatan: '',
        maxDurasi: 3,
        durasi: "1 Hari",
        listBarang: [],
        loading: false,
        done: null,
        idPeminjaman: null,
        expiredAfter: null,
        dialog: false
    }),
    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.required && errors.push('Nama tidak boleh kosong')
            !this.$v.name.maxLength && errors.push('Nama maksimal 30 Karakter')
            !this.$v.name.minLength && errors.push('Nama terlalu pendek')
            return errors
        },
        nimErrors () {
            const errors = []
            if (!this.$v.nim.$dirty) return errors
            !this.$v.nim.required && errors.push('NIM/NIP tidak boleh kosong')
            !this.$v.nim.numeric && errors.push('NIM/NIP tidak valid')
            !this.$v.nim.maxLength && errors.push('NIM/NIP maksimal 11 Karakter')
            !this.$v.nim.minLength && errors.push('')
            return errors
        },
        maxDurasiArr(){
            var data = [];
            for(let i = 1; i <= this.maxDurasi; i++) {
                data.push(i + " Hari");
            }
            return data;
        },
    },
    methods: {
        setSnackbar(message, color) {
            this.snackbar.status = true
            this.snackbar.message = message
            this.snackbar.color = color
        },
        reset() {
            this.name = '',
            this.nim = '',
            this.email = '',
            this.catatan = '',
            this.durasi = "1 Hari",
            this.listBarang = []
        },
        validate () {
            let err = 0
            let errMessage = null
            let errBarang = null
            let errMessageDefault = "Ada kesalahan, periksa kembali input yang ada"

            this.$v.$touch();
            if (this.$v.$pending || this.$v.$error){
                if (this.listBarang.length <= 0) return this.setSnackbar("Ada kesalahan, <b>Pastikan anda memilih barang</b>", "error")
                return this.setSnackbar(errMessageDefault, "error")
            }else {
                let durasi = parseInt(this.durasi.split(" ")[0])
                var start = moment()
                var end = moment(start).add(durasi, 'days')
                var confirmDay = moment(start).add(1, 'days')

                const dataObj = {
                    user: {
                        namaPeminjam: this.name,
                        nimPeminjam: this.nim,
                        emailPeminjam: this.email
                    },
                    listBarang: [],
                    lamaMeminjam: durasi,
                    startDate: start.format('DD/MM/YYYY'),
                    endDate: end.format('DD/MM/YYYY'),
                    expiredAfter: confirmDay.format('DD/MM/YYYY'),
                    catatan: this.catatan
                }

                this.listBarang.forEach(l=>{
                    if (!l.jumlah) {
                        err++
                        return errMessage = "Jumlah Barang yang dipinjam tidak boleh kosong"
                    }else if (l.jumlah > 0) {
                        this.barang.forEach(b => {
                            if (b.id == l.id) {
                                if (l.jumlah <= b.stokBarang) {
                                    dataObj.listBarang.push({
                                        id: l.id,
                                        namaBarang: l.namaBarang,
                                        jumlah: l.jumlah
                                    })
                                }else {
                                    err++
                                    if (errBarang == null) {
                                        errBarang = l.namaBarang
                                    }else {
                                        errBarang += ", " + l.namaBarang
                                    }
                                    return errMessage = "<b>"+errBarang+"</b> yang anda pinjam terlalu banyak"
                                }
                            }
                        })
                    }else {
                        err++
                        return this.setSnackbar(errMessageDefault, "error")
                    }
                })

                if (err == 0) {
                    this.exePeminjaman(dataObj)
                }else {
                    if (errMessage == null) return this.setSnackbar(errMessageDefault, "error")
                    return this.setSnackbar(errMessage, "error")
                }
            }
        },
        exePeminjaman(req) {
            const vm = this
            const bash = vm.$store.state.url.bash
            vm.loading = true
            axios({
                method: 'post',
                url: bash+"/api/peminjaman",
                data: {
                    detailData: req
                }
            }).then(res=>{
                moment.locale("id")
                this.idPeminjaman = res.data.data.id
                this.expiredAfter = moment(res.data.data.expiredAfter, "DD/MM/YYYY").format('dddd, D MMMM YYYY')

                // LocalStorage History
                let obj = {id: this.idPeminjaman, submitAt: res.data.data.submitAt}
                this.$store.dispatch('setHistoryPeminjaman', obj)
                this.history.push(obj)

                this.setSnackbar("Berhasil meminjam", "success")
                vm.done = true
                vm.reset()
            }).catch(err=>{
                const obj = err.response
                vm.setSnackbar(obj.data.data.message, "error")
            }).finally(()=>{
                vm.loading = false
            })
        },
        exeClearHistory() {
            this.dialog = false
            this.history = []
            this.$store.dispatch('setHistoryPeminjaman', null)
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
