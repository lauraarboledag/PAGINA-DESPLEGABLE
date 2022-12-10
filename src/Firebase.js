// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_-J9lMxZtWQ2XdsOqJCK8pEs29EJ2o-w",
  authDomain: "web-1-e445a.firebaseapp.com",
  projectId: "web-1-e445a",
  storageBucket: "web-1-e445a.appspot.com",
  messagingSenderId: "437843065130",
  appId: "1:437843065130:web:6a1b73345fd65e633e0653",
  measurementId: "G-R0MP2J9FCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const FirebaseFirestore = getFirestore(app);

export{
    FirebaseFirestore,
}