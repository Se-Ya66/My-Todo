<template>
    <div class="top-page">
    <div class="main">
        <div class="text">My ToDo</div>
    </div>
    <v-btn elevation="6" height="60" width="160" @click.stop="dialog = true">LOGIN</v-btn>

    <v-dialog v-model="dialog" max-width="290">
        <v-card>
        <v-card-title>
            <h1 class="display-1">LOGIN</h1>
        </v-card-title>
        <v-card-text>
            <p class="errorMessage" style="color: red" v-if="valid">{{validError}}</p>
            <v-form>
            <v-text-field prepend-icon="mdi-account-circle" label="メールアドレス" v-model="mailAddress"/>
            </v-form>
            <v-form>
            <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" label="パスワード"
                @click:append="showPassword = !showPassword" v-model="password"/>
            </v-form>
            <v-form>
            <v-card-actions>
                <v-btn @click="login()">ログイン</v-btn>
            </v-card-actions>
            </v-form>
        </v-card-text>
        </v-card>
    </v-dialog>

    <div class="sub">
        <p class="sub-text">mailAddress:example@co.jp</p>
        <p class="sub-text">password:password</p>
    </div>

    </div>
</template>

<script>
import firebase from "~/plugins/firebase.js";

export default {
    data() {
    return {
        dialog: false,
        showPassword: false,
        mailAddress: '',
        password: '', 
        valid: false,
        validError: "メールアドレスまたはパスワードが間違っています", 
    }
    },
    methods:{
        login: function() {
        firebase.auth().signInWithEmailAndPassword(this.mailAddress, this.password)
        .then(user => {
        this.$store.commit('loginState', this.mailAddress, this.password);
        this.$router.push("card");
        }).catch((error) => {
        this.valid = true;
        });
    },
    }
}

</script>

<style>
body {
text-align: center;
height: 100vh;
background: #006400;
margin: 0;
padding: 0;
}

.top-page {
background: #006400;
height: 100vh;
padding-top: 200px;
}

.main {
display: block;
width: 800px;
height: 200px;
color: #eee;
font-size: 100px;
font-family: arial;
font-weight: bold;
margin: auto;
position: relative;
overflow: hidden;

}

.main .text {
display: block;
width: inherit;
height: inherit;
color: #eee;
font-size: 100px;
font-family: arial;
font-weight: bold;
left: 2px;
top: 0px;
position: absolute;
overflow: hidden;
animation-name: textBlink;
animation-duration: 2s;
animation-iteration-count: infinite;
}
.sub{
    margin-top: 50px;
}




</style>
