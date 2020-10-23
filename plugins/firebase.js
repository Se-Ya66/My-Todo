import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBzZSw36QoTxWUUmPUV6XIZlIZ_caHL1gI",
    authDomain: "sample-login-2b352.firebaseapp.com",
    databaseURL: "https://sample-login-2b352.firebaseio.com",
    projectId: "sample-login-2b352",
    storageBucket: "sample-login-2b352.appspot.com",
    messagingSenderId: "150862961040",
    appId: "1:150862961040:web:b4d444ecc496578fa8fb15",
    measurementId: "G-7EYW6HHJBX"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;