<template>
    <div>
        <v-container grid-list-xs style="margin-top: -135px">
        <v-layout row wrap justify-center>

            <v-flex xs12 lg12 xl3 class="hidden-lg-and-down" style="margin-top: 135px">
                <v-card flat style="background: transparent !important">
                    <!-- <v-card-title primary-title>
                        Ayo cari barang yang<br/>ingin kamu pinjam
                    </v-card-title> -->
                    <v-card-text>
                        <v-img width="100%" :src="require('~/assets/superhero-2.svg')"/>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 lg10 xl6>
            <v-card class="pa-5" outlined>
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
                        label="NIM/NIP"
                        :rules="[v => !!v || 'NIM/NIP tidak boleh kosong']"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        type="email"
                        :rules="[v => !!v || 'Email tidak boleh kosong']"
                        required
                    ></v-text-field>

                    <v-select
                        v-model="listBarang"
                        :items="items"
                        item-text="namaBarang"
                        :rules="[v => !!v || 'Barang tidak boleh kosong']"
                        label="Pilih barang"
                        required
                        multiple
                        chips
                        return-object
                    ></v-select>

                    <!-- <v-textarea
                        v-model="catatan"
                        label="Catatan"
                        rows="2"
                        auto-grow
                        counter="40"
                    ></v-textarea> -->

                    <v-flex xs12 lg12>
                        <v-layout row wrap>
                            <v-flex xs12 lg6 xl6 v-for="(item, index) in listBarang" pa-1 :key="index">
                                <v-card outlined>
                                    <v-card-text>
                                        
                                        <v-list-item three-line>
                                            <v-list-item-content>
                                                <div class="overline mb-4">Barang {{index+1}}</div>
                                                <v-list-item-title class="headline mb-1">{{item.namaBarang}}</v-list-item-title>
                                                <v-list-item-subtitle>Tersedia: {{item.stok}}</v-list-item-subtitle>
                                                <v-text-field
                                                    v-model="item.jumlah"
                                                    class="mt-6 pt-0"
                                                    label="Jumlah yang dipinjam: "
                                                    type="number"
                                                    :max="item.stok"
                                                    min="1"
                                                    :rules="[v => !!v || 'Jumlah barang tidak boleh kosong']"
                                                    required
                                                ></v-text-field>
                                            </v-list-item-content>

                                            <v-list-item-avatar
                                                tile
                                                size="75"
                                                color="grey"
                                            ></v-list-item-avatar>
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

                    <v-select
                    :class="listBarang.length != 0 ? 'mt-4' : ''"
                    v-model="durasi"
                    :items="maxDurasiArr"
                    label="Durasi / Lama Pinjam"
                    ></v-select>

                    <!-- <v-slider
                        v-model="durasi"
                        thumb-label="always"
                        ticks="always"
                        tick-size="6"
                        persistent-hint
                        step="1"
                        :max="maxDurasi"
                        min="1"
                        hint="Min 1 hari"
                    >
                        <template v-slot:prepend>
                            <p>Durasi Pinjam</p>
                        </template>
                        <template v-slot:append>
                            <v-text-field
                                v-model="durasi"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                style="width: 60px"
                                :max="maxDurasi"
                                min="1"
                            ></v-text-field>
                            <p>Hari</p>
                        </template>
                    </v-slider> -->

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

            <v-flex xs12 lg12 xl3 class="hidden-lg-and-down" style="margin-top: 135px">
                <v-card flat style="background: transparent !important">
                    <!-- <v-card-title primary-title>
                        Ayo cari barang yang<br/>ingin kamu pinjam
                    </v-card-title> -->
                    <v-card-text>
                        <v-img width="100%" :src="require('~/assets/superhero.svg')"/>
                    </v-card-text>
                </v-card>
            </v-flex>

            <br>

            <v-flex xs12 xl8>  
                <pre>{{ dataObj }}</pre>
            </v-flex>

        </v-layout>
        </v-container>
    </div>
</template>

<script>
// import api from '@/plugins/api.js'
// import Axios from '@/plugins/axios.js'

export default {
     data: () => ({
      valid: true,
      name: '',
      nim: '',
      email: '',
      catatan: '',
      maxDurasi: 5,
      durasi: 1,
      listBarang: [],
      items: [
        {
            id: '1',
            namaBarang: 'PC',
            stok: 3,
            jumlah: 1
        },
        {
            id: '2',
            namaBarang: 'XBOX',
            stok: 3,
            jumlah: 1
        },
        {
            id: '3',
            namaBarang: 'Mac PC',
            stok: 4,
            jumlah: 1
        },
        {
            id: '4',
            namaBarang: 'VR',
            stok: 1,
            jumlah: 1
        }

      ],    
      lazy: false,
      dataObj: null
    }),
    computed: {
        maxDurasiArr(){
            var data = [];
            for(let i = 1; i <= this.maxDurasi; i++) {
                data.push(i + " Hari");
            }
            return data;
        }
    },
    methods: {
        validate () {
            if (this.$refs.form.validate()) {

                const dataObj = {
                    user: {
                        namaPeminjam: this.name,
                        nimPeminjam: this.nim,
                    },
                    listBarang: [],
                    lamaMeminjam: parseInt(this.durasi.split(" ")[0])
                }
                this.listBarang.forEach(barang=>{
                    dataObj.listBarang.push({
                        namaBarang: barang.namaBarang,
                        jumlah: barang.jumlah
                    })
                })
                if (dataObj.listBarang.length > 0) {
                    this.dataObj = dataObj
                    // var bodyFormData = new FormData();  
                    // bodyFormData.set('obj', dataObj)
                    // this.$store.commit('addPeminjaman',dataObj)
                }else {
                    alert('Barang kosong')
                }

            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
}
</script>