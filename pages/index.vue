<template>
    <v-container grid-list-xs>
        <cardView imgPosition="left" title="Produk Lab" subtitle="Produk Multimedia Research Laboratory" tag="#1" link="/product" :image="['https://images.unsplash.com/photo-1495510096779-5fbe73258c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80', 'https://images.unsplash.com/photo-1488376986648-2512dfc6f736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80']"/>
        <cardView imgPosition="right" title="Aktivitas Lab" subtitle="Aktivitas Multimedia Research Laboratory" tag="#2" link="/activity" :image="['https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80']"/>
        <cardView imgPosition="left" title="Peminjaman barang" subtitle="Peminjaman Barang Multimedia" tag="#3" link="/peminjaman" :image="['https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80']"/>
    </v-container>
</template>
<script>
import cardView from '~/components/cardView.vue'

export default {
    components: {
        cardView
    },
    data(){
        return {
            username: '',
            user: null
        }
    }
}
</script>
<style>
    
</style>