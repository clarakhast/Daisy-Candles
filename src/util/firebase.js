import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase Configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQIfRV8NmTsCnhA3qOFze_ZVcSAgIyHBo",
    authDomain: "daisy-candles-66df6.firebaseapp.com",
    projectId: "daisy-candles-66df6",
    storageBucket: "daisy-candles-66df6.appspot.com",
    messagingSenderId: "274670445690",
    appId: "1:274670445690:web:af29190cf7fd072ba787c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase