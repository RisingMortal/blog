// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "blog-webapp-e58aa.firebaseapp.com",
  projectId: "blog-webapp-e58aa",
  storageBucket: "blog-webapp-e58aa.appspot.com",
  messagingSenderId: "19450738393",
  appId: "1:19450738393:web:e1068e7b384930067830c8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);