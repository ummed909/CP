// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Vnuci5zOLXTNnagHpVwmh1bK3UElWIo",
  authDomain: "cproject-f406c.firebaseapp.com",
  projectId: "cproject-f406c",
  storageBucket: "cproject-f406c.appspot.com",
  messagingSenderId: "117835758853",
  appId: "1:117835758853:web:e09a6fe3bbed3b45124b6c",
  measurementId: "G-CPFLJQR8BP"
};

const app = initializeApp(firebaseConfig);

export default app;