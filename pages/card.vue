<template>
    <div>
        <Header />
        <v-container>
            <v-row
            >
                <v-col  v-for="todo in todos" :key="todo.id"
                md="2" sm="3" xs="2" lg="2">
                    <v-card light raised width="200" height="250" class="ma-4" :color="todo.color">
                        <v-card-title class="headline">{{todo.title}}</v-card-title>
                        <v-card-subtitle>{{todo.subtitle}}</v-card-subtitle>
                        <v-divider class="mx-3"></v-divider>
                        <v-card-text>
                            <div class="body-1 mb-1">{{todo.text}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="remove(todo.id)" small class="done-btn">Done</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col md="2" sm="3" xs="2" lg="2">
                    <v-dialog v-model="dialog" max-width="350">
                        <template v-slot:activator="{ on, attrs }">
                            <v-card  width="200" height="250" class="ma-4">
                                <v-card-actions >
                                    <v-btn class="mx-2" fab dark color="grey" @click.stop="dialog = true"
                                    v-bind="attrs"
                                    v-on="on"
                                    elevation="3">
                                    <v-icon dark >mdi-plus</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                        <v-card :color="color">
                            <v-card-text>
                                <v-text-field label="title" single-line v-model="title"></v-text-field>
                                <v-text-field label="subtitle" single-line v-model="subtitle"></v-text-field>
                                <v-textarea auto-grow label="description" v-model="text"></v-textarea>
                                <v-card-actions >
                                    <v-icon v-for="(colorList, index) in colorLists" :key="index" medium :color="colorList"
                                    @click="colorChange(colorList)" class="color-btns">
                                    mdi-circle
                                    </v-icon>
                                    <v-spacer></v-spacer>
                                    <v-btn small @click="cleanArea" class="cancel-btn">
                                    cancel
                                    </v-btn>
                                    <v-btn small @click.prevent="add">
                                    ok
                                    </v-btn>
                                </v-card-actions>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
components: {
    Header,
},
data() {
    return {
        dialog: false,
        title: '',
        subtitle: '',
        text: '',
        color: '',
        activeColor: '',
        colorLists: [
            'white',
            'blue lighten-3',
            'red lighten-3',
            'green lighten-3',
            'yellow lighten-3',
        ]
    }
},
created: function() {
    this.$store.dispatch('todos/init')
},
methods: {
    add() {
    this.$store.dispatch('todos/add', {
    title:this.title,
    subtitle:this.subtitle,
    text:this.text,
    color:this.color
    })
    this.title = '',
    this.subtitle = '',
    this.text = '',
    this.color = ''
    this.dialog = false;
    },
    remove(id) {
        this.$store.dispatch('todos/remove', id)
    },
    colorChange(col) {
    this.color = col;
    },
    cleanArea() {
    this.title = '',
    this.subtitle = '',
    this.text = ''
    this.dialog = false;
    this.color = ''
    }
},
computed: {
    todos() {
        return this.$store.state.todos.todos
    }
    }
}
</script>

<style>
.v-toolbar__title {
    overflow: visible !important;
    margin-right: 50px !important;
}
.ma-4 {
    position: relative;
}
.mx-2 {
    position: absolute;
    top:30%;
    left:30%;
}
.cancel-btn {
    margin-left: 20px;
}
.headline{
    margin-bottom: 20px;
}
.done-btn{
    margin-top: 10px;
}
.color-btns{
    margin-right: -10px;
}
@media (min-width: 1024px) {
    .mx-2 {
        left:28%;
    }
}
</style>
