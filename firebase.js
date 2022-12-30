// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiF6AjR8Ert75Oc3rhbdriLRWzq9vV-iY",
  authDomain: "reels-next-6e89a.firebaseapp.com",
  projectId: "reels-next-6e89a",
  storageBucket: "reels-next-6e89a.appspot.com",
  messagingSenderId: "737317882725",
  appId: "1:737317882725:web:0b75e5559c4a363a456f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth()
export {auth}
export default app;