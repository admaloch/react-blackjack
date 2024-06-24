// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEzbgytvNK054sw-jFlwBPWzhYDFaqBfs",
  authDomain: "react-blackjack-f3747.firebaseapp.com",
  projectId: "react-blackjack-f3747",
  storageBucket: "react-blackjack-f3747.appspot.com",
  messagingSenderId: "1022543727938",
  appId: "1:1022543727938:web:0075f96aaf8a254f9bccdb",
  measurementId: "G-QTW3FX51ML"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Export Firestore instance (you can export other Firebase services as needed)
export { db };