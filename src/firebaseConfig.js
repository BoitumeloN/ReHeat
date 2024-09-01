import firebase from "firebase/app";
import "firebase/auth"; // Import the Firebase authentication module

const firebaseConfig = {
  apiKey: process.env.REACT_FIRE_BASE_KEY,
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: process.env.REACT_FIRE_BASE_ID,
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;