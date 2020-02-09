<template>
<div class="bgSection">
    <v-container grid-list-xs>
        <cardView imgPosition="left" title="Produk" subtitle="Produk Multimedia Research Laboratory" tag="#1" link="/produk" :image="[require('@/assets/img/svg/undraw_buffer_wq43.svg')]" media="images" :contain="true"/>
        <v-divider></v-divider>
        <cardView imgPosition="left" title="Aktivitas" subtitle="Aktivitas Multimedia Research Laboratory" tag="#2" link="/aktivitas" :image="[require('@/assets/img/svg/undraw_researching_22gp.svg')]" media="images" :contain="true"/>
        <v-divider></v-divider>
        <!-- <cardView imgPosition="left" title="Peminjaman barang" subtitle="Peminjaman Barang Multimedia" tag="#3" link="/peminjaman" :image="[require('@/assets/img/svg/undraw_abstract_x68e.svg')]" media="images" :contain="true"/>
        <v-divider></v-divider> -->
        <cardView imgPosition="center" title="Profil Multimedia" subtitle="Ketuk tombol dibawah, untuk melihat profil lab kami" tag="#Profil" link="/profil" :image="[]" media="" :contain="false"/>
    </v-container>
</div>
</template>
<script>
import cardView from '@/components/cardView.vue'

export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setInfoPage', {titleInfo: 'Beranda', headerInfo: store.state.routeMeta.index})
    },
    components: {
        cardView,
    },
    data(){
        return {
            username: '',
            user: null,
            isActive: false,
        }
    }
}
</script>
<style lang="scss">
    @media only screen and (min-width: 0) {
        .bgSection {
            background: #ffffff;
        }
    }
    @media only screen and (min-width: 1264px){
        .bgSection {
            background: url('../assets/img/bg2.svg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }


</style>