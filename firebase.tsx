import firebase, { FirebaseOptions } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyAfXA72YYC47lAlONqndsssYiThBqmpUZM",
    authDomain: "chokaneur-6932b.firebaseapp.com",
    projectId: "chokaneur-6932b",
    storageBucket: "chokaneur-6932b.appspot.com",   
  
    messagingSenderId: "593659028156",
    appId: "1:593659028156:android:9afbc971ed3379062ae6b9",
    measurementId: "93659028156"
  };
  
  if(!firebase.getApps.length){
    firebase.initializeApp(firebaseConfig);
  }
 