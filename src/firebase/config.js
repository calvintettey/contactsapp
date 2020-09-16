import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCm1mlnDhAaAPf1PopPxUm6DRe3t9FGC7k",
    authDomain: "contacts-app-11f74.firebaseapp.com",
    databaseURL: "https://contacts-app-11f74.firebaseio.com",
    projectId: "contacts-app-11f74",
    storageBucket: "contacts-app-11f74.appspot.com",
    messagingSenderId: "526360582494",
    appId: "1:526360582494:web:ee1cf9d16e2427deed57cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;