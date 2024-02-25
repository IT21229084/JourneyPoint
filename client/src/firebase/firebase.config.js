// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7OlH0aJ82gyyw6j1DdSYjuZym9baJ5gg",
  authDomain: "journeypoint-d4041.firebaseapp.com",
  projectId: "journeypoint-d4041",
  storageBucket: "journeypoint-d4041.appspot.com",
  messagingSenderId: "425889081300",
  appId: "1:425889081300:web:bff36b737ea416d6ed5841",
  measurementId: "G-C8Z8HPE3HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app