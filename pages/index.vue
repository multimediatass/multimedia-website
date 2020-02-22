<template>
<div class="mt-8 bgSection">
    <v-container grid-list-xs>

        <v-layout row wrap v-if="dataAktivitas.length != 0">
            <v-flex xs12 justify-center>
                <div style="text-align: center">
                    <h1 class="display-1">LATEST ACTIVITY</h1>
                    <p class="subtitle-1">Follow our laboratory for latest update</p>
                </div>
                <caraoselNews media="left" class="mt-8" :news="dataAktivitas"/>
            </v-flex>
        </v-layout>

        <v-layout row wrap style="margin-top: 150px">
            <v-flex xs12 justify-center>
                <div style="text-align: center">
                    <h1 class="display-1">OUR DIVISION</h1>
                    <p class="subtitle-1">Multimedia Laboratory have 5 division for study group</p>
                </div>
                <divisionCard class="mt-8"/>
            </v-flex>
        </v-layout>

        <v-layout row wrap style="margin-top: 150px" v-if="dataProduk.length != 0">
            <v-flex xs12 justify-center>
                <div style="text-align: center">
                    <h1 class="display-1">OUR PRODUCT</h1>
                    <p class="subtitle-1">All about product laboratory</p>
                </div>
                <caraoselNews media="right" class="mt-8" :news="dataProduk"/>
            </v-flex>
        </v-layout>

        <v-layout row wrap style="margin-top: 150px; margin-bottom: 140px">
            <v-flex xs12 justify-center>
                <div style="text-align: center">
                    <h1 class="display-1">OUR SKILL</h1>
                    <p class="subtitle-1">Search about skill from laboratory</p>
                </div>
                <ourSkill/>
            </v-flex>
        </v-layout>

    </v-container>
    
</div>
</template>
<script>
import cardView from '@/components/cardView.vue'
import caraoselNews from '@/components/caraoselNews'
import divisionCard from '@/components/divisionCard'
import ourSkill from '@/components/ourSkill'

import {createClient} from '~/plugins/contentful.js'
const client = createClient()

export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setLoading', true)
        return Promise.all([
            // fetch the owner of the blog
            client.getEntries({
            'sys.id': ""
            }),
            // fetch all blog posts sorted by creation date
            client.getEntries({
            'content_type': "aktivitas",
            order: '-sys.createdAt'
            }),
            client.getEntries({
            'content_type': "product",
            order: '-sys.createdAt'
            })
        ]).then(([entries, posts, posts_2]) => {
            // return data that should be available
            // in the template
            return {
                person: entries.items[0],
                aktivitas: posts.items,
                product: posts_2.items
            }
        }).catch(console.error)
        .finally(end=>{
            store.dispatch('setInfoPage', {titleInfo: 'Beranda', headerInfo: store.state.routeMeta.index})
            store.dispatch('setLoading', false)
        })
    },
    components: {
        cardView,
        caraoselNews,
        divisionCard,
        ourSkill
    },
    data(){
        return {
            username: '',
            user: null,
            isActive: false
        }
    },
    computed: {
        dataAktivitas(){
            const data = []
            this.aktivitas.forEach(element => {
                data.push({
                    title: element.fields.title,
                    description: element.fields.description,
                    img: element.fields.cover,
                    link: '/aktivitas/'+element.sys.id
                })
            });
            return data
        },
        dataProduk() {
            const data = []
            this.product.forEach(element => {
                data.push({
                    title: element.fields.title,
                    description: element.fields.description,
                    img: element.fields.cover,
                    link: '/produk/'+element.sys.id
                })
            })
            return data
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
            background: url('../assets/img/bg/section-2.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
        }
    }


</style>