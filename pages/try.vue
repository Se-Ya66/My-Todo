<template>
    <div>
        <v-container>
            <v-icon v-for="(colorList, index) in colorLists" 
            :key="index" medium :color="colorList"
            >
            mdi-circle
            </v-icon>
        </v-container>
        <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 5"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
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