<template>
<div class="index">
    <v-container grid-list-xs>
        <cardView imgPosition="left" title="Produk" subtitle="Produk Multimedia Research Laboratory" tag="#1" link="/produk" :image="['https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-2.jpg', 'https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-3.jpg']" media="images"/>
        <cardView imgPosition="right" title="Aktivitas" subtitle="Aktivitas Multimedia Research Laboratory" tag="#2" link="/aktivitas" :image="['https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-5.jpg', 'https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-4.jpg']" media="images"/>
        <cardView imgPosition="left" title="Peminjaman barang" subtitle="Peminjaman Barang Multimedia" tag="#3" link="/peminjaman" :image="['https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-1.jpg']" media="images"/>
        <v-divider></v-divider>
            <cardView imgPosition="center" title="Profil Multimedia" subtitle="Ketuk tombol dibawah, untuk melihat profil lab kami" tag="#Profil" link="/profil" :image="[]" media=""/>
        <v-divider></v-divider>
    </v-container>
</div>
</template>
<script>
import cardView from '@/components/cardView.vue'

export default {
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
    .index {
        background: url('../assets/img/bg.svg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>