import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyCCAc9au5NRcQdA-cgJxPPwS9eLXzFPmpo",
  authDomain: "gujarat-explorer.firebaseapp.com",
  projectId: "gujarat-explorer",
  storageBucket: "gujarat-explorer.appspot.com",
  messagingSenderId: "439787021786",
  appId: "1:439787021786:web:a454038836432043da4ce3",
  measurementId: "G-X5YR379EKS",
};

// firebase.initializeApp(config);
firebase.initializeApp(config);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
const app = initializeApp(config);
// const analytics = getAnalytics(app);
// const storage = getStorage(config);
export { auth, provider, db, app };
