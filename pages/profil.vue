<template>
    <div class="index">

        <v-container grid-list-xs>
            <cardView imgPosition="left" title="Multimedia" subtitle="Research Laboratory FIT" tag="#Profil" link='' :image="[require('@/assets/vid/1.mp4')]" media="video"/>
        </v-container>

        <!-- <v-row>
            <v-col cols="12" md="12" style="background: #f0f0f0">
                <v-container grid-list-xs>
                <v-card
                    flat
                    class="pa-0"
                    style="background: transparent"
                >
                    <v-carousel
                        cycle
                        hide-delimiter-background
                        class="responsive-media"
                    >
                        <v-carousel-item
                            src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                        >
                            
                        </v-carousel-item>
                    </v-carousel>
                  
                </v-card>
                </v-container>
            </v-col>
        </v-row> -->

        <!-- <v-container grid-list-xs>
            <v-divider></v-divider>
        </v-container> -->

        <!-- <div>
        <v-container grid-list-xs>
            <v-row>
                <v-col cols="12" class="text-center">
                    <div>
                        <h1>Visi & Misi</h1>
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                        <v-timeline-item
                        v-for="(item, i) in items"
                        :key="i"
                        :color="item.color"
                        :icon="item.icon"
                        fill-dot
                        >
                        <v-card
                            :color="item.color"
                            dark
                        >
                            <v-card-title class="title">{{item.title}}</v-card-title>
                            <v-card-text class="white text--primary pt-3">
                            <p>{{item.desc}}</p>
                           
                            </v-card-text>
                        </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>    
        </v-container>
        </div> -->

        <!-- <div style="background: #86139E">
            <v-container grid-list-xs>
               <v-row justify="center" align="center" class="pa-0 pa-md-2">
                   <v-col cols="12" class="text-center white--text">
                       <div>
                        <h1>apa kata mereka</h1>
                       </div>
                   </v-col>
                    <v-item-group
                        v-model="window"
                        class="shrink mr-3"
                        mandatory
                        tag="v-flex"
                    >
                        <v-item
                            v-for="t in testimoni"
                            :key="t"
                            v-slot:default="{ active, toggle }"
                        >
                            <div>
                            <v-btn
                                :input-value="active"
                                icon
                                @click="toggle"
                                color="white"
                            >
                                <v-icon>mdi-record</v-icon>
                            </v-btn>
                            </div>
                        </v-item>
                    </v-item-group>

                    <v-col cols="10" md="6">
                        <v-window
                            v-model="window"
                            vertical
                        >
                            <v-window-item
                            v-for="t in testimoni"
                            :key="t.title"
                            class="elevation-1"
                            >
                            <v-card
                                flat
                                class="mx-auto pa-2"
                            >
                                <v-list-item>
                                <v-list-item-avatar color="grey">
                                    <v-img
                                        class="elevation-6"
                                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                    ></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="headline">{{t.title}}</v-list-item-title>
                                    <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>

                                <v-card-text>
                                    {{t.desc}}
                                </v-card-text>

                            </v-card>

                            
                            </v-window-item>
                        </v-window>
                    </v-col>
                </v-row>
            </v-container>
        </div> -->

    </div>
</template>
<script>
import socialMedia from '@/components/socialMedia'
import cardView from '@/components/cardView'
import plyr from 'vue-plyr'

export default {
    data: () => ({
        length: 3,
        window: 0,
        testimoni: [
            {
                title: 'Abizard',
                desc: 'nikmat dan sejahtera sekali dimulmedd fit',
                color: 'blue',
                icon: 'mdi-star'
            },
            {
                title: 'Bambang pamungkas',
                desc: 'nikmat dan sejahtera sekali fit',
                color: 'blue',
                icon: 'mdi-star'
            }
        ],
        items: [
            {
                title: 'Visi',
                desc: 'Visi multimedia research',
                color: 'green lighten-2',
                icon: 'mdi-star'
            },
            {
                title: 'Misi',
                desc: 'Misi multimedia research',
                color: 'indigo lighten-1',
                icon: 'mdi-buffer'
            }
        ],
    }),
    components: {
        socialMedia,
        cardView,
        plyr
    }
}
</script>

<style lang="scss">
    .titleSection {
        padding: 10px 20px;
        border-radius: 100px;
        background: #f6f6f6;
    }

    
</style>