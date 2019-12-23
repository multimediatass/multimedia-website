import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig  = {
    apiKey: "AIzaSyAlnwoYiA1usG1UBXr3OGBbVtz9QXAjE_A",
    authDomain: "multimedia-website.firebaseapp.com",
    databaseURL: "https://multimedia-website.firebaseio.com",
    projectId: "multimedia-website",
    storageBucket: "multimedia-website.appspot.com",
    messagingSenderId: "851837886839",
    appId: "1:851837886839:web:47e74a9424eedfd8170172",
    measurementId: "G-BXKPEVZX67"
};
firebase.initializeApp(firebaseConfig )

export const fire = firebase;
export const db= firebase.firestore();