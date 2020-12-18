import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDf2Yj4GsFo2rxrPchlSxyWt267YUxxZhQ",
  authDomain: "react-shopping-cart-1da60.firebaseapp.com",
  databaseURL: "https://react-shopping-cart-1da60.firebaseio.com",
  projectId: "react-shopping-cart-1da60",
  storageBucket: "react-shopping-cart-1da60.appspot.com",
  messagingSenderId: "643119909726",
  appId: "1:643119909726:web:85fde1308196754a8bddcf",
  measurementId: "G-KQ51G0QRXT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firedb = firebase.database();
export const storage = firebase.storage();
