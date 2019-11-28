<template>
    <div class="cardViewContainer">
    
    <template v-if="imgPosition == 'left'">
        <div class="contentImg">
            <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class="grey lighten-2"
            ></v-img>
        </div>
        <div class="contentText">
            <h3 class="tagText">Tag</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">We carried out the UX and UI design for two editions of the event site.</p>
            <br>
            <router-link :to="link" class="btnMore">View {{title}}</router-link>
        </div>
    </template>
    <template v-else-if="imgPosition == 'right'">
        <div class="contentText">
            <h3 class="tagText">Tag</h3>
            <h1 class="titleText">{{title}}</h1>
            <p class="subtitleText">We carried out the UX and UI design for two editions of the event site.</p>
            <br>
            <router-link :to="link" class="btnMore">View {{title}}</router-link>
        </div>
        <div class="contentImg">
            <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class="grey lighten-2"
            ></v-img>
        </div>
    </template>
    <template v-else>
        <div class="contentImg full">
            <v-img
                :src="image"
                :lazy-src="image"
                transition="fade-transition"
                class="grey lighten-2"
            ></v-img>
        </div>
        <div class="contentText">
            <h1 class="titleText">{{title}}</h1><br>
            <router-link :to="link" class="btnMore">Pinjam Barang</router-link>
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
        link: String
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
        border-radius: 31px;
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
            padding: 30px;
        
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
            .contentImg:last-child {
                order: 1;
            }
            .contentText:first-child {
                order: 2;
            }

            .contentText, .contentImg {
                width: 100% !important;
            }

            .contentImg img{
                width: 100%;
            }

            .titleText {
                font-size: 32px;
            }
            .subtitleText {
                color: rgb(115, 99, 127);
                font-size: 21px;
                font-weight: 500;
            }
            .tagText {
                font-size: 14px;
            }
        }

        @media only screen and (min-width: 1264px){
            
            .contentImg:last-child {
                order: 2;
            }
            .contentText:first-child {
                order: 1;
            }

            .contentText, .contentImg {
                width: 50% !important;
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
                font-size: 48px;
            }
            .subtitleText {
                color: rgb(115, 99, 127);
                font-size: 21px;
                font-weight: 500;
            }
            .tagText {
                font-size: 14px;
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
</style>