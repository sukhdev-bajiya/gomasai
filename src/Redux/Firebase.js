import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqApVcJnWWIlp1Gy7X5ALzLB_LdYSPlj4",
    authDomain: "gomasai.firebaseapp.com",
    projectId: "gomasai",
    storageBucket: "gomasai.appspot.com",
    messagingSenderId: "348925847050",
    appId: "1:348925847050:web:f401a8febe117cf00721f3",
    measurementId: "G-ZLG0LBCXJK"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };