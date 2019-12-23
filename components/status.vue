<template>
    <v-layout row wrap justify-center mt-5>
        <!-- <v-flex xs6 md4 justify-center text-center column>
            <v-img :src="require('@/assets/img/svg/404.svg')"></v-img>
        </v-flex> -->
        <v-flex mt-5 xs12 justify-center text-center column>
            <v-icon large :color="type">{{icon}}</v-icon>
            <h3>{{msg.title}}</h3>
            <p>{{msg.subtitle}}</p>
            <v-divider></v-divider>
            <br>
            <span>Kembali ke
            <b><router-link to="/">beranda</router-link></b>
            </span>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    props: {
        type: String,
        icon: String,
        msg: Object
    }
}
</script>