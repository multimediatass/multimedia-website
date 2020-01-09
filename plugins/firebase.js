import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig  = {
  // apiKey: "AIzaSyAlnwoYiA1usG1UBXr3OGBbVtz9QXAjE_A",
  // authDomain: "multimedia-website.firebaseapp.com",
  // databaseURL: "https://multimedia-website.firebaseio.com",
  // projectId: "multimedia-website",
  // storageBucket: "multimedia-website.appspot.com",
  // messagingSenderId: "851837886839",
  // appId: "1:851837886839:web:47e74a9424eedfd8170172",
  // measurementId: "G-BXKPEVZX67"
  apiKey: "AIzaSyAruiS-ZOiUOSYZP4q7xev9UMckcN8OA40",
  authDomain: "rudyfoods-98.firebaseapp.com",
  databaseURL: "https://rudyfoods-98.firebaseio.com",
  projectId: "rudyfoods-98",
  storageBucket: "rudyfoods-98.appspot.com",
  messagingSenderId: "821510242303",
  appId: "1:821510242303:web:f7ea6d2c74887eed9531ca"
};
firebase.initializeApp(firebaseConfig )

export const firestore = firebase.firestore();