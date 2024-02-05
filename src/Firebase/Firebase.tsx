import firebase from "firebase/compat/app";
import { Firestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

// firebase.initializeApp(config);
firebase.initializeApp(config);
var auth = firebase.auth();
// var provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
const firebaseApp = initializeApp(config);
// const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(app);
const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(firebaseApp) : null,
);
const storage = getStorage();
const database = getDatabase(firebaseApp);
export { auth, db, firebaseApp, analytics, storage, config, database };