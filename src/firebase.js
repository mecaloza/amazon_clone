import  firebase from "firebase";

const firebaseApp= firebase.initializeApp({

    apiKey: "AIzaSyCYHA5y9REPxPjZ89ZCZMg9h9CMiu23T3M",
  authDomain: "clone-5a51b.firebaseapp.com",
  databaseURL: "https://clone-5a51b.firebaseio.com",
  projectId: "clone-5a51b",
  storageBucket: "clone-5a51b.appspot.com",
  messagingSenderId: "945992298283",
  appId: "1:945992298283:web:78f06fe8e3c16e490d9f6e",
  measurementId: "G-70JGD4SMN6"

});

const db = firebaseApp.firestore()
const auth=firebase.auth()

export{auth};