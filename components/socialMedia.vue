<template>
    <div>
        <v-card flat class="pa-2" transparent outlined>
            <v-card-text class="text-center">
                <h1 class="display-1 font-weight-thin mb-2">Temukan</h1>
                <h4 class="subheading">Multimedia Research Laboratory di</h4>
                <div class="ma-3">
                <v-btn v-for="s in socialMedia" :key="s.title" class="mx-2" fab dark small :color="s.color">
                    <v-icon dark>{{s.icon}}</v-icon>
                </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        socialMedia: [
            {title: 'Instagram', icon: 'mdi-instagram', color: 'pink', link: 'https://instagram.com/multimediafit'},
            {title: 'Facebook', icon: 'mdi-facebook', color: 'blue', link: 'https://instagram.com/multimediafit'},
            {title: 'Youtube', icon: 'mdi-youtube', color: 'red', link: 'https://instagram.com/multimediafit'}
        ],
    }),
}
</script>
<style lang="scss">
    .socialMedia {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        background: #f0f0f0;
    }
</style>