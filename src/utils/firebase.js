import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1WkLaZCieBrMov43ZaeK7NhloW8G1zmw",
  authDomain: "challenge-c69ce.firebaseapp.com",
  databaseURL: "https://challenge-c69ce.firebaseio.com",
  projectId: "challenge-c69ce",
  storageBucket: "challenge-c69ce.appspot.com",
  messagingSenderId: "902617789154",
  appId: "1:902617789154:web:7082d607b054b8b58ae4bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
