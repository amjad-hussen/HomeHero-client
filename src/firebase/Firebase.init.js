// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3eIuj4PRrc0wbd_i9Of-MdyhPbAGXSJA",
  authDomain: "home-hero-92dea.firebaseapp.com",
  projectId: "home-hero-92dea",
  storageBucket: "home-hero-92dea.firebasestorage.app",
  messagingSenderId: "875587815393",
  appId: "1:875587815393:web:720466affec13abc9b34a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);