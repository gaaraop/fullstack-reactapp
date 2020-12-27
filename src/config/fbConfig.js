import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDP5ZFrRin6Q19ZTsrbpujvwjCTPx-7FxE",
    authDomain: "marioplan-80335.firebaseapp.com",
    projectId: "marioplan-80335",
    storageBucket: "marioplan-80335.appspot.com",
    messagingSenderId: "380457947384",
    appId: "1:380457947384:web:71e84d66c33056cff96b0d",
    measurementId: "G-7T9WPPFJWJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;