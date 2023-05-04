// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApoV6tJdHxJjiu-ZeMBlorCckqsFntlUs",
  authDomain: "b7a10-mexican-chef.firebaseapp.com",
  projectId: "b7a10-mexican-chef",
  storageBucket: "b7a10-mexican-chef.appspot.com",
  messagingSenderId: "507979038813",
  appId: "1:507979038813:web:8206a21d20b28a095f0db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;