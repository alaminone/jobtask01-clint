// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcAL0o9OpKovb5OByZ78P1tu-ue4PSSc",
  authDomain: "jobtask01-e22ed.firebaseapp.com",
  projectId: "jobtask01-e22ed",
  storageBucket: "jobtask01-e22ed.appspot.com",
  messagingSenderId: "1094402035832",
  appId: "1:1094402035832:web:c60f2e747991bc00c29d8d"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const globalAuth = getAuth(app);
export default globalAuth;
