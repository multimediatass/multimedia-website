<template>
    <div>
        <v-card flat outlined class="pa-5 shadowCard radiusCard">
            <v-layout row wrap align-center justify-center>
                <v-flex xs6 sm6 md2 v-for="(d, index) in division" :key="index" class="pa-1 pa-md-5 my-5 ma-md-0">
                    <div class="d-flex flex-wrap flex-column align-center justify-center">
                        <v-img
                            width="50%"
                            :src="d.img"
                            :lazy-src="d.img"
                            transition="fade-transition"
                        ></v-img>
                        <v-card-title primary-title class="justify-center">
                            {{d.title}}
                        </v-card-title>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>
<script>
// imageFrom = 'https://www.flaticon.com/packs/virtual-reality-73'
export default {
    data: ()=>({
        division: [
            {
                title: 'Cinema',
                img: 'https://image.flaticon.com/icons/png/512/1841/1841719.png'
            },
            {
                title: 'Game Dev',
                img: 'https://image.flaticon.com/icons/png/512/1841/1841687.png'
            },
            {
                title: 'AR/VR',
                img: 'https://image.flaticon.com/icons/png/512/1841/1841747.png'
            },
            {
                title: 'Mobile Dev',
                img: 'https://image.flaticon.com/icons/png/512/1841/1841686.png'
            },
            {
                title: 'Music',
                img: 'https://image.flaticon.com/icons/png/512/1841/1841703.png'
            },
        ]
    })
}
</script>
<style lang="scss">
</style>