import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBVsXNzETD01pKp0sgqrM6GuZz-XdXg5Yo",
  authDomain: "react-app-3da57.firebaseapp.com",
  projectId: "react-app-3da57",
  storageBucket: "react-app-3da57.appspot.com",
  messagingSenderId: "1065230059741",
  appId: "1:1065230059741:web:8f809c54f9a8d8c064b334",
  measurementId: "G-4YVHM1PWSJ",
});

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

export default app;
