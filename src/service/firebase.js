import firebase from 'firebase/app'; // <-- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

try {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID

    // apiKey: "AIzaSyA1d1axg_h31Ai_aWDC9DI5ARhyz-YH0J0",
    // authDomain: "chat-app-ff7ca.firebaseapp.com",
    // projectId: "chat-app-ff7ca",
    // storageBucket: "chat-app-ff7ca.appspot.com",
    // messagingSenderId: "845452974891",
    // appId: "1:845452974891:web:a415d0f1b00c5a13c4c36e"
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

// Passing off firebase.auth() instead of firebase.auth
// allows us to share the same instance of Firebase throughout
// the entire app whenever we import it from here.

export const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};