import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const todosRef = db.collection('todos')

export const state = () => ({
    todos: [],
    mailAddress: '',
    password: '',
    loginState: false,
    activeColor: '',
    colorLists: [
        'blue lighten-3',
        'red lighten-3',
        'green lighten-3',
        'yellow lighten-3',
    ]
})

export const mutations = {
    loginState(state, mailAddress, password) {
        state.mailAddress = mailAddress;
        state.password = password;
        state.loginState = true;
    },
    logoutState(state) {
        state.loginState = false;
    },
}

export const actions = {
init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todosRef)
}),
add: firestoreAction((context, {title, subtitle, text, color}) => {
    if(title.trim()) {
    todosRef.add({
        title: title,
        subtitle: subtitle,
        text: text,
        color: color,
        created: firebase.firestore.FieldValue.serverTimestamp()
    })
    }
}),
remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete()
}),

}