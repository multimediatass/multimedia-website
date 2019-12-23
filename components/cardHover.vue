<template>
    <v-flex xs12 md6 lg6 pa-3>
        <v-card flat class="cardCustom hoverSimple">
            <v-img
            :src="data.imgData"
            :lazy-src="data.imgData"
            contain
            >
                <template v-slot:placeholder>
                    <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                    >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
            <v-card-text>
            <div></div>
            <p class="titleCard text--primary" style="margin-bottom: 0px !important">
                {{data.title}}
            </p>
            <div class="text--primary">
                {{data.subtitle}}
            </div><br>
            <v-chip v-for="label in data.label" class="ma-1" :color="label.color" label text-color="white">
                <v-icon left>{{label.icon}}</v-icon>
                {{label.labelName}}
            </v-chip>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                text
                color="deep-purple accent-4"
                @click="goTo(data.toLink)"
                :disabled="data.toLink == ''"
            >
                <template v-if="this.$route.params.type == 'programming'">
                    Show Demo
                </template>
                <template v-else>
                    Show Detail
                </template>
            </v-btn>
            <v-spacer></v-spacer>
            </v-card-actions>

        </v-card>
    </v-flex>
</template>
<script>
export default {
    props: {
        data: Object
    },
    methods: {
        goTo(url){
            window.open(url, '_blank');
        }
    }
}
</script>
<style lang="scss">
    @media only screen and (min-width: 0px) {
    .cardCustom {
      padding: 0px !important;

      .titleCard {
        font-size: 1.5rem!important;
        line-height: 2rem;
        letter-spacing: .0073529412em!important;
        font-weight: 400;
        
      }
    }
  }
  @media only screen and (min-width: 1264px) {
    .cardCustom {
      padding: 22.5px !important;

      .titleCard {
        font-size: 2.125rem!important;
        line-height: 2.5rem;
        letter-spacing: .0073529412em!important;
        font-weight: 400;
      }

    }
  }

  .hoverSimple {
    border-radius: 8px !important;
    transition: transform .3s cubic-bezier(.165,.84,.44,1) !important;
    box-shadow: none !important;
  }
  .hoverSimple:hover {
    transition: all .3s cubic-bezier(.165,.84,.44,1) !important;
    box-shadow: 0 9px 60px 0 rgba(218,54,84,.15) !important;
    transform: translateY(-.19375rem) !important;
    z-index: 1;
  }
</style>