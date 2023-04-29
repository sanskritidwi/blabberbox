import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEgaBo-aqVxsiXqHAgB8TX0ek19BjDVVs",
    authDomain: "firechat-ae252.firebaseapp.com",
    projectId: "firechat-ae252",
    storageBucket: "firechat-ae252.appspot.com",
    messagingSenderId: "227455702624",
    appId: "1:227455702624:web:7415d979f613502779d505"
});

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export {db, auth}