// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgImrbMSLczvp9_0w6K9qJmy-nppksQHM",
  authDomain: "react-auth-e68b8.firebaseapp.com",
  projectId: "react-auth-e68b8",
  storageBucket: "react-auth-e68b8.firebasestorage.app",
  messagingSenderId: "425127661904",
  appId: "1:425127661904:web:bded237289e6f361ae1c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app