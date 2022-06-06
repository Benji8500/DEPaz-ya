// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8-c308aB4mJ3eRaUQ-Us5wY1zlUrI48k",
    authDomain: "depaz-ya.firebaseapp.com",
    projectId: "depaz-ya",
    storageBucket: "depaz-ya.appspot.com",
    messagingSenderId: "139956046416",
    appId: "1:139956046416:web:e38bc3c53226391f2fdf55",
    measurementId: "G-RHRF9VJQ6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();