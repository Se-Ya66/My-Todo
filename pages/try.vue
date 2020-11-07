<template>
    <div>
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-card width="200" height="250">
                <v-btn>
                  <v-icon dark >mdi-plus</v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            colorLists: [
            'blue lighten-3',
            'red lighten-3',
            'green lighten-3',
            'yellow lighten-3',
        ],
        model: null,
        }
    }
}
</script>

<style>

</style>