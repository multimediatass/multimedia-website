<template>
    <div>
        <v-card flat outlined class="shadowCard radiusCard">
        <v-carousel hide-delimiters height="100%" :continuous="false">
            <v-carousel-item
                v-for="d in news"
                :key="d.title"
                height="auto"
            >
                <v-layout row wrap fill-height justify-center>
                    <v-flex xs12 md5 justify-center align-self-center :order-xs2="media == 'right'">
                        <v-img
                            height="100%"
                            contain
                            :src="d.img[0].fields.file.url"
                            :lazy-src="d.img[0].fields.file.url"
                            transition="fade-transition"
                        ></v-img>
                    </v-flex>
                    <v-flex xs12 md7 pa-md-1 pa-lg-10 :order-xs1="media != 'right'">
                        <div style="display: flex; justify-content: space-between; flex-direction: column; align-items: flex-start; height: 100%">
                            <div>
                                <v-card-title primary-title class="text-uppercase" :class="[$vuetify.breakpoint.smAndDown ? 'title' : 'title']">
                                    {{d.title}}
                                </v-card-title>
                                <v-card-text class="subtitle-1">
                                    <!-- <RichTextRenderer :document="cutText(d.description)"/> -->
                                    {{d.description}}
                                </v-card-text>
                            </div>
                            <v-card-actions class="pa-4">
                                <v-btn color="success" tile :to="d.link">Read More</v-btn>
                            </v-card-actions>
                        </div>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
        </v-carousel>
        </v-card>
    </div>
</template>
<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
export default {
    props: ['news', 'media'],
    data: ()=>({

    }),
    methods: {
        cutText(text) {
            return text.substring(0, 20);
        }
    },
    components: {
        RichTextRenderer
    },
}
</script>