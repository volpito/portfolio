// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAZrCZA5msxgosgVxaWtBRzZZKcAl1E9yM",
  authDomain: "mpj-portfolio-app.firebaseapp.com",
  projectId: "mpj-portfolio-app",
  storageBucket: "mpj-portfolio-app.appspot.com",
  messagingSenderId: "435366411009",
  appId: "1:435366411009:web:cc73813f8ec0ba90373900",
  measurementId: "G-0Y7T54W0XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);