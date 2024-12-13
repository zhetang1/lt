// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOuWlx6FAoOpFCrNf3SHKAnsrv3yZMWXc",
  authDomain: "leot-a6243.firebaseapp.com",
  projectId: "leot-a6243",
  storageBucket: "leot-a6243.firebasestorage.app",
  messagingSenderId: "229222285734",
  appId: "1:229222285734:web:b53eda33ecb738a59e4f67",
  measurementId: "G-NRHRWYV1SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);