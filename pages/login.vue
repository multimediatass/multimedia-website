<template>
    <div>
        <v-container grid-list-xs style="margin-top: -135px">
        <v-layout row wrap justify-center>

            <v-flex xs12 lg8 xl6>
            <v-card class="px-5 pb-5" outlined :loading="loading">
                <div class="pt-5"></div>
                <v-alert v-if="alert.type != null" :type="alert.type">
                    {{alert.message}}
                </v-alert>
                <v-card-title primary-title>
                    Login Panel
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-text-field
                        v-model="email"
                        label="Email"
                        :rules="[v => !!v || 'Email tidak boleh kosong']"
                        required
                        @keyup.enter="signin"
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        label="Password"
                        type="password"
                        :rules="[v => !!v || 'Password tidak boleh kosong']"
                        required
                        @keyup.enter="signin"
                    ></v-text-field>

                    <v-btn
                        color="success"
                        class="mr-4"
                        @click="signin"
                    >
                        Login
                    </v-btn>

                </v-card-text>
            </v-card>
            </v-flex>

        </v-layout>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios'
// const bash = "https://multimedia-site.herokuapp.com"
// const bash = "http://localhost:3000"

export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setInfoPage', {titleInfo: 'Login', headerInfo: store.state.routeMeta.login})
    },
    data:()=>({
        email: '',
        password: '',
        alert: {type: null, message: null},
        loading: null
    }),
    // asyncData({ params, error }) {
    //     return axios.get('http://localhost:3000/api/next-movie').then((res) => {
    //         return { movie: res.data }
    //     })
    // },
    methods: {
        signin() {
            const vm = this
            vm.$store.commit('setLoading', true)
            const bash = vm.$store.state.url.bash
            vm.loading = true
            axios({
                method: 'post',
                url: bash+"/api/signin",
                data: {
                    email: this.email,
                    password: this.password
                }
            }).then(res=>{
                if (res.data.user != null) {
                    vm.alert.type = null
                    vm.alert.message = null
                    vm.$router.push('/admin_panel')
                }else {
                    vm.alert.type = "error"
                    vm.alert.message = res.data.message
                    vm.loading = false
                }
            }).catch(err=>{
                vm.loading = false
            }).finally(end=>{
                vm.$store.commit('setLoading', false)
            })
        }
    }
}
</script>