<template>

    <div class="cardViewContainer">
    
    <template v-if="imgPosition == 'left'">
        <div v-if="image.length != 0" class="contentImg" :class="contain ? 'contain' : ''">
            <!-- <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class=""
            ></v-img> -->

            <v-carousel
                v-if="media == 'images'"
                hide-delimiters
                :continuous="true"
                :cycle="true"
                :show-arrows="image.length > 1"
                transition="fade-transition"
                class=" responsive-media shadowMedia"
            >
                <v-carousel-item
                    v-for="(i, index) in image" :key="index"
                    :src="i"
                    :lazy-src="i"
                >
                </v-carousel-item>
            </v-carousel>

            <plyr v-else-if="media == 'video'" class="mediaPlayer shadowMedia">
                <video>
                    <source :src="image[0]" type="video/mp4" />
                    <source src="video.ogg" type="video/ogg" />
                </video>
            </plyr>

        </div>
        <div class="contentText">
            <h3 class="tagText">{{tag}}</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">{{subtitle}}</p>
            <NuxtLink v-if="link != ''" :to="link" class="btnMore">Baca Selengkapnya</NuxtLink>
        </div>
    </template>
    <template v-else-if="imgPosition == 'right'">
        <div class="contentText">
            <h3 class="tagText">{{tag}}</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">{{subtitle}}</p>
            <NuxtLink v-if="link != ''" :to="link" class="btnMore">Baca Selengkapnya</NuxtLink>
        </div>
        <div v-if="image.length != 0" class="contentImg" :class="contain ? 'contain' : ''">
            <!-- <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class=""
            ></v-img> -->
             <v-carousel
                v-if="media == 'images'"
                hide-delimiters
                :continuous="true"
                :cycle="true"
                :show-arrows="image.length > 1"
                transition="fade-transition"
                class=" responsive-media shadowMedia"
            >
                <v-carousel-item
                    v-for="(i, index) in image" :key="index"
                    :src="i"
                    :lazy-src="i"
                >
                </v-carousel-item>
            </v-carousel>
            <plyr v-else-if="media == 'video'" class="mediaPlayer shadowMedia">
                <video>
                    <source :src="image[0]" type="video/mp4" />
                    <source src="video.ogg" type="video/ogg" />
                </video>
            </plyr>
        </div>
    </template>
    <template v-else-if="imgPosition == 'socialMedia'">
        <div v-if="image.length != 0" class="contentImg" :class="contain ? 'contain' : ''">
            
        </div>
        <div class="contentText">
            <h3 class="tagText">{{tag}}</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">{{subtitle}}</p>
            <NuxtLink v-if="link != ''" :to="link" class="btnMore">Baca Selengkapnya</NuxtLink>
        </div>
    </template>
    <template v-else>
        <div v-if="image.length != 0" class="contentImg full" :class="contain ? 'contain' : ''">
             <v-carousel
                v-if="media == 'images'"
                hide-delimiters
                :continuous="true"
                :cycle="true"
                :show-arrows="image.length > 1"
                transition="fade-transition"
                class=" responsive-media shadowMedia"
            >
                <v-carousel-item
                    v-for="(i, index) in image" :key="index"
                    :src="i"
                    :lazy-src="i"
                >
                </v-carousel-item>
            </v-carousel>
            <plyr v-else-if="media == 'video'" class="mediaPlayer shadowMedia">
                <video>
                    <source :src="image[0]" type="video/mp4" />
                    <source src="video.ogg" type="video/ogg" />
                </video>
            </plyr>
        </div>
        <div class="contentText full">
            <h3 class="tagText">{{tag}}</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">{{subtitle}}</p>
            <NuxtLink v-if="link != ''" :to="link" class="btnMore">Baca Selengkapnya</NuxtLink>
        </div>
    </template>

    </div>
</template>
<script>
import plyr from 'vue-plyr'
export default {
    props: {
        title: String,
        subtitle: String,
        media: String,
        image: Array,
        imgPosition: String,
        link: String,
        tag: String,
        contain: Boolean
    },
    components: {
        plyr
    },
    data: () => ({
      
    }),
}
</script>
<style lang="scss">
    .shape {
        width: 200px;
        height: 200px;
        position: absolute;
        background-size: 100%;
        background-repeat: no-repeat;
        
    }
    .shape.verA {
        background: url('../assets/img/shapes/shape-1.svg');
    }
    .shape.verB {
        background: url('../assets/img/shapes/shape-2.svg');
    }
    .shape.verC {
        background: url('../assets/img/shapes/shape-3.svg');
    }
    .shape.verD {
        background: url('../assets/img/shapes/shape-4.svg');
    }
    .shape.verLeft {
        background: url('../assets/img/shapes/box.svg');
    }
    .shape.verRight {
        background: url('../assets/img/shapes/shape-right.svg');
    }
    .shape.verBottom {
        background: url('../assets/img/shapes/bottom.svg');
    }
    .shape.verPlus {
        background: url('../assets/img/shapes/shape-plus.svg');
    }

    .shape.bottom {
        bottom: 0;
    }
    .shape.right {
        right: 0;
    }
    .shape.left {
        left: 0;
    }
    .shape.top {
        top: 0;
    }

    .shadowMedia {
        // box-shadow: 0 4px 10px rgba(0,0,0,.1) !important;
        // -webkit-box-shadow: 0 4px 10px rgba(0,0,0,.1) !important;
    }
    .mediaPlayer {
        border-radius: 10px !important;

        // *:not(.plyr__controls__item, .plyr__controls, .plyr__controls__item *) {
        //     width: 100% !important;
        // }
    }
</style>