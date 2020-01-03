import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCIfREO7meyAaSoR1dZsD_K0bEl1EiXok",
    authDomain: "myportfolio-be937.firebaseapp.com",
    databaseURL: "https://myportfolio-be937.firebaseio.com",
    projectId: "myportfolio-be937",
    storageBucket: "myportfolio-be937.appspot.com",
    messagingSenderId: "822598069825",
    appId: "1:822598069825:web:b764cac0c2a769286560c0",
    measurementId: "G-ZMNVR8SV5W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db }