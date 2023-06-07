// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0pPLh4SVIVGRg81r2egWAEeVWjhOwYPo",
  authDomain: "cwebproject-e78f1.firebaseapp.com",
  projectId: "cwebproject-e78f1",
  storageBucket: "cwebproject-e78f1.appspot.com",
  messagingSenderId: "804047699216",
  appId: "1:804047699216:web:27ea934c0c3fd78a1d3995",
  measurementId: "G-FLV49NFLQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default firebaseConfig;