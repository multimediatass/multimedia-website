import * as app from 'firebase/app';
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAlnwoYiA1usG1UBXr3OGBbVtz9QXAjE_A",
    authDomain: "multimedia-website.firebaseapp.com",
    databaseURL: "https://multimedia-website.firebaseio.com",
    projectId: "multimedia-website",
    storageBucket: "multimedia-website.appspot.com",
    messagingSenderId: "851837886839",
    appId: "1:851837886839:web:47e74a9424eedfd8170172",
    measurementId: "G-BXKPEVZX67"
};

app.initializeApp(config)

export const firebase = app;
export const auth     = app.auth();
export const db       = app.database();
export const firestore= app.firestore();