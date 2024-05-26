// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4a5QSJKiMi-7ckan2vhbt7jkMTgHrwP4",
  authDomain: "fir-01-942fc.firebaseapp.com",
  projectId: "fir-01-942fc",
  storageBucket: "fir-01-942fc.appspot.com",
  messagingSenderId: "900354992052",
  appId: "1:900354992052:web:f7f4ec07ce108ed5a434e1",
  measurementId: "G-G2QJLM5K5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);