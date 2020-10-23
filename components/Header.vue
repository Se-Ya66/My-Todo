<template>
    <div>
        <v-app-bar app dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>My Todo</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed temporary>
            <v-list nav dense>
            <v-list-item-group>
                <v-list-item v-for="(list, i) in nav_list" :key="i" :to="list.link">
                <v-list-item-icon>
                    <v-icon>{{ list.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{list.name}}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            nav_list: [{
                name: 'HOME',
                icon: 'mdi-home',
                link: '/'
            },
            {
                name: 'LOGOUT',
                icon: 'mdi-key'
            }
            ],
        }
    }
}
</script>

<style>

</style>