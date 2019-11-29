<template>
    <v-container grid-list-xs>
        <h1>Login As Admin..</h1>    
        <br>
        <v-btn @click="logout">Logout</v-btn>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    methods: {
        logout() {
            const vm = this
            const url = vm.$store.state.url
            return axios.get(url.bash + url.signout).then((res) => {
                vm.$router.push('/');
            })
        }
    }
}
</script>