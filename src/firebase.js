// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0kSzv_Gp5p-2H5oK4w8TCOhY4kTqYXMY",
  authDomain: "react-disney-plus-app-a5499.firebaseapp.com",
  projectId: "react-disney-plus-app-a5499",
  storageBucket: "react-disney-plus-app-a5499.appspot.com",
  messagingSenderId: "522956961881",
  appId: "1:522956961881:web:25c4a0be48f201eb0e9948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
