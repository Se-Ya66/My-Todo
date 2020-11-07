<template>
    <div class="top-page">
        <div class="top-container">
        <h1 class="site-title">My ToDo</h1>
        <h3 class="btn" @click.stop="dialog = true">LOGIN</h3>
        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-card-title>
                    <h3 class="display">LOGIN</h3>
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
            <p class="sub-ex">下記よりログインしてください。</p>
            <p class="sub-text">mailaddress:example@co.jp</p>
            <p class="sub-text">password:password</p>
        </div>
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

.top-page {
    background: url('../images/todotop.jpg') center center / cover no-repeat fixed;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    text-align: center;
}
.top-container{
    margin-top:10%;
}
.site-title{
color:#fff;
font-size: 7rem;
font-family: 'Cookie', cursive;
letter-spacing: 3px;
}
.sub{
margin-top: 40px;
}
.sub-text{
color:#fff;
}
.sub-ex{
color:#fff;
font-size:12px;
}
.display{
font-size:18px;
letter-spacing: 2px;
}
.btn {
    background-color:#fff;
    color: #000;
    font-size:15px;
    text-align: center;
    line-height: 50px;
    margin:0 auto ;
    border-radius: 5px;
    border: 2px solid  #ffffff;
    width: 125px;
    transition: 0.3s;
    letter-spacing: 2px;
}

.btn:hover {
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .top-container{
    margin-top:50%;
    }
    .site-title{
    font-size: 10rem;
    }
    .btn {
    width: 125px;
    line-height: 50px;
    }
}
@media (max-width: 800px) {
    .top-container{
    margin-top:45%;
    }
    .site-title{
    font-size: 8rem;
    }
    .btn {
    width: 125px;
    line-height: 50px;
    }
}
@media (max-width: 767px) {
    .top-container{
    margin-top:50%;
    }
    .site-title{
    font-size: 5rem;
    }
    .btn {
    width: 100px;
    line-height: 40px;
    }
}
</style>
