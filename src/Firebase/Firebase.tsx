import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// firebase.initializeApp(config);
firebase.initializeApp(config);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
const app = initializeApp(config);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
// const analytics = getAnalytics(app);
// const storage = getStorage(config);
export { auth, provider, db, app, analytics };
