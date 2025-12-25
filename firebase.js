// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqcjZJJ6drICT50bYbBz2L1L91LsEcxfY",
  authDomain: "dzbigbuy.firebaseapp.com",
  projectId: "dzbigbuy",
  storageBucket: "dzbigbuy.firebasestorage.app",
  messagingSenderId: "215071629520",
  appId: "1:215071629520:web:656ddb2fc6c7b03387fed5",
  measurementId: "G-HFV5DSXGZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);