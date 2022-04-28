// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtDVW7PxSz7AsH0EBBZMiofTHxcLOIGsA",
  authDomain: "el-electricista.firebaseapp.com",
  projectId: "el-electricista",
  storageBucket: "el-electricista.appspot.com",
  messagingSenderId: "458603524839",
  appId: "1:458603524839:web:58960d66555f38236a2842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);