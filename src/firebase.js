// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLGCKW6-gUUePmhrJegTcfqu1ovEDiI-A",
  authDomain: "dexassign.firebaseapp.com",
  projectId: "dexassign",
  storageBucket: "dexassign.appspot.com",
  messagingSenderId: "1033787174473",
  appId: "1:1033787174473:web:09fee89cb2ef288c489998",
  measurementId: "G-8GVGJ8R6XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const analytics = getAnalytics(app);


export { projectStorage, projectFirestore, timestamp};