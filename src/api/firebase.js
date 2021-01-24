import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2lwUG3rCX6H44Pyyo43GDZuAfPYMeQqw",
    authDomain: "calm-producer-301613.firebaseapp.com",
    projectId: "calm-producer-301613",
    storageBucket: "calm-producer-301613.appspot.com",
    messagingSenderId: "243597988460",
    appId: "1:243597988460:web:eecf87246cf8a39a267e49",
    measurementId: "G-DFTPQZEXYD"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export {firebase, db}