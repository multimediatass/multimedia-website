<template>
    <v-container grid-list-xs>
        <cardView imgPosition="left" title="Our Product" subtitle="Product Multimedia Research Laboratory" tag="" link="/product" image="https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-2.jpg"/>
        <cardView imgPosition="right" title="Our Activity" subtitle="Activity Multimedia Research Laboratory" tag="" link="/activity" image="https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-5.jpg"/>
        <cardView imgPosition="left" title="Peminjaman barang" subtitle="" tag="" link="/peminjaman" image="https://bunnycdn.com/assets//v2/images/homepage/bunnycdn-review-profile-1.jpg"/>
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