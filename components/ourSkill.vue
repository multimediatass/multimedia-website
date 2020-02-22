<template>
    <div>
        <v-card flat outlined class="shadowCard radiusCard">
            <v-layout row wrap justify-center>
                
            <v-flex xs12 md6 pa-lg-5>
                <v-toolbar flat>
                    
                <!-- <v-text-field
                    hide-details
                    placeholder="ex: Front-end"
                    single-line
                    v-model="skill"
                ></v-text-field> -->

                <v-autocomplete
                    :items="skill"
                    :filter="customFilter"
                    item-text="name"
                    hide-details
                    placeholder="ex: Front-end"
                    single-line
                    v-model="selectedSkill"
                ></v-autocomplete>

                <v-btn icon @click="searchSkill()">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <template v-if="aslab.status == true">
                    <v-card outlined class="my-4">
                        <!-- <v-card-media src="src" height="200px">
                        </v-card-media> -->
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Coming soon</h3>
                                <!-- <div>Frontend developer</div> -->
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <!-- <v-btn flat color="primary">text</v-btn>
                            <v-btn flat color="primary">text</v-btn> -->
                        </v-card-actions>
                    </v-card>
                </template>
            </v-flex>
            
            </v-layout>

        </v-card>
    </div>
</template>

<script>
export default {
    data: ()=>({
        skill: [
          { name: 'Front-end', abbr: 'FL', id: 1 },
          { name: 'Back-end', abbr: 'GA', id: 2 },
          { name: 'Mobile Dev', abbr: 'NE', id: 3 },
          { name: 'UI/UX', abbr: 'CA', id: 4 },
          { name: 'Illustrator', abbr: 'NY', id: 5 },
          { name: 'AR', abbr: 'NY', id: 5 },
          { name: 'VR', abbr: 'NY', id: 5 },
        ],
        selectedSkill: null,
        aslab: {
            data: null,
            status: false
        }
    }),
    methods: {
        customFilter (item, queryText, itemText) {
            const textOne = item.name.toLowerCase()
            const textTwo = item.abbr.toLowerCase()
            const searchText = queryText.toLowerCase()

            return textOne.indexOf(searchText) > -1 ||
            textTwo.indexOf(searchText) > -1
        },
        searchSkill() {
            return false
            this.aslab.status = true
        }
    }
}
</script>