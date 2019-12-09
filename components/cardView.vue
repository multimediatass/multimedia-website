<template>
    <div class="cardViewContainer">
    
    <template v-if="imgPosition == 'left'">
        <div class="contentImg">
            <!-- <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class="grey lighten-2"
            ></v-img> -->
            <v-carousel
                hide-delimiters
                continuous="true"
                :cycle="true"
                :show-arrows="image.length > 1"
                transition="fade-transition"
                class="grey lighten-2 responsive-media"
            >
                <v-carousel-item
                    v-for="(i, index) in image" :key="index"
                    :src="i"
                    :lazy-src="i"
                >
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="contentText">
            <h3 class="tagText">{{tag}}</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">{{subtitle}}</p>
            <router-link :to="link" class="btnMore">Baca Selengkapnya</router-link>
        </div>
    </template>
    <template v-else-if="imgPosition == 'right'">
        <div class="contentText">
            <h3 class="tagText">{{tag}}</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">{{subtitle}}</p>
            <router-link :to="link" class="btnMore">Baca Selengkapnya</router-link>
        </div>
        <div class="contentImg">
            <!-- <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class="grey lighten-2"
            ></v-img> -->
             <v-carousel
                hide-delimiters
                continuous="true"
                :cycle="true"
                :show-arrows="image.length > 1"
                transition="fade-transition"
                class="grey lighten-2 responsive-media"
            >
                <v-carousel-item
                    v-for="(i, index) in image" :key="index"
                    :src="i"
                    :lazy-src="i"
                >
                </v-carousel-item>
            </v-carousel>
        </div>
    </template>
    <template v-else>
        <div class="contentImg full">
            <!-- <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class="grey lighten-2"
            ></v-img> -->
             <v-carousel
                hide-delimiters
                continuous="true"
                :cycle="true"
                :show-arrows="image.length > 1"
                transition="fade-transition"
                class="grey lighten-2 responsive-media"
            >
                <v-carousel-item
                    v-for="(i, index) in image" :key="index"
                    :src="i"
                    :lazy-src="i"
                >
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="contentText">
            <h1 class="titleText">{{title}}</h1>
            <router-link :to="link" class="btnMore">Baca Selengkapnya</router-link>
        </div>
    </template>

    </div>
</template>
<script>
export default {
    props: {
        title: String,
        subtitle: String,
        image: String,
        imgPosition: String,
        link: String,
        tag: String
    }
}
</script>
<style lang="scss">
    .btnMore {
        outline: none;
        position: relative;
        font-size: 14px;
        font-weight: 900;
        line-height: 1.57em;
        text-transform: uppercase;
        -webkit-mask-image: -webkit-radial-gradient(center, white, black);
        padding: 16px 32px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(95, 5, 171);
        border-image: initial;
        border-radius: 100px;
        transition: color 0.4s ease-in-out 0s;
        overflow: hidden;
        cursor: pointer;

        color: rgb(95, 5, 171) !important;
        text-decoration: none;
    }
    .btnMore:hover {
        color: #ffffff !important;
        transition: color 0.4s ease-in-out 0s;
    }
    .btnMore:hover::before {
        transform: translate3d(-50%, -50%, 0px) scale3d(20, 20, 20);
    }
    .btnMore::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        background-color: rgb(95, 5, 171);
        transform-origin: center center;
        transform: translate3d(-50%, -50%, 0px) scale3d(0, 0, 0);
        border-radius: 50%;
        transition: transform 0.45s ease-in-out 0s;
    }


    .cardViewContainer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        .contentImg {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            flex-wrap: wrap;
            width: 50%;
        
            h1 {
                margin-bottom: 10px;
            }
            img {
                width: 90%;
                max-width: 100%;
            }
        }
        .contentText {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            flex-direction: column;
            padding: 30px;

            width: 50%;
        }

        @media only screen and (min-width: 0) {
            .btnMore {
                padding: 8px 16px !important;
                margin-top: 2.5px !important;
                font-size: 13px !important;
                border-width: 1.5px !important;
            }
            .contentImg:last-child {
                order: 1;
            }
            .contentText:first-child {
                order: 2;
            }

            .contentText, .contentImg {
                width: 100% !important;
                padding: 10px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                flex-wrap: wrap !important;
                text-align: center !important;
            }

            .contentImg img{
                width: 100%;
            }

            .titleText {
                font-size: 21px !important;
            }
            .subtitleText {
                color: rgb(115, 99, 127);
                font-size: 13px !important;
                font-weight: 500;
            }
            .tagText {
                font-size: 14px !important;
            }
        }

        @media only screen and (min-width: 1264px){
            .btnMore {
                padding: 16px 32px !important;
                margin-top: 10px !important;
                font-size: 14px !important;
                border-width: 2px !important;
            }
            .contentImg:last-child {
                order: 2;
            }
            .contentText:first-child {
                order: 1;
            }

            .contentText, .contentImg {
                width: 50% !important;
                padding: 30px !important;
                display: flex;
                justify-content: flex-start !important;
                align-items: flex-start !important;
                flex-wrap: wrap !important;
                text-align: left !important;
            }

            .full {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100% !important;

                img {
                    width: 100% !important;
                }
            }

            .contentImg img{
                width: 95%;
            }

            .titleText {
                font-size: 48px !important;
            }
            .subtitleText {
                color: rgb(115, 99, 127);
                font-size: 21px !important;
                font-weight: 500;
            }
            .tagText {
                font-size: 14px !important;
            }
        }
    }

    @media only screen and (min-width: 0) {
        .cardViewContainer {
            margin: 15px 0px !important;
            padding: 5px !important;
        }
    }
    @media only screen and (min-width: 1264px){
        .cardViewContainer {
            margin: 35px 0px !important;
            padding: 15px !important;
        }
    }



@media only screen and (min-width: 0) {
    .responsive-media-card {
        height: 225px !important;

        .v-image{
            height: 100% !important;
        }
    }
    .responsive-media {
        height: 225px !important;

        .v-image{
            height: 100% !important;
        }
    }
}
@media only screen and (min-width: 600px) {
    .responsive-media-card {
        height: 250px !important;

        .v-image{
            height: 100% !important;
        }
    }
    .responsive-media {
        height: 320px !important;

        .v-image{
            height: 100% !important;
        }
    }
}
@media only screen and (min-width: 960px){
    .responsive-media-card {
        height: 300px !important;

        .v-image{
            height: 100% !important;
        }
    }
    .responsive-media {
        height: 380px !important;

        .v-image{
            height: 100% !important;
        }
    }
}
@media only screen and (min-width: 1264px){
    .responsive-media-card {
        height: 320px !important;

        .v-image{
            height: 100% !important;
        }
    }
    .responsive-media {
        height: 400px !important;

        .v-image {
            height: 100% !important;
        }
    }
}
@media only screen and (min-width: 1904px){
    .responsive-media-card {
        height: 350px !important;

        .v-image{
            height: 100% !important;
        }
    }
    .responsive-media {
        height: 500px !important;

        .v-image {
            height: 100% !important;
        }
    }
}

</style>