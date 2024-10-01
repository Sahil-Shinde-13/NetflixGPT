// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBe7qrpCCT5O7CVJrzxfHxDSYMMfqQxZzE',
  authDomain: "netflixgpt-9dafa.firebaseapp.com",
  projectId: "netflixgpt-9dafa",
  storageBucket: "netflixgpt-9dafa.appspot.com",
  messagingSenderId: "231302439770",
  appId: "1:231302439770:web:1b4789fca9e8dd7c6fc963",
  measurementId: "G-F05CE83GCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()