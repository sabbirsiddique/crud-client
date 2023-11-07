// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC9WySMOUsueVx90CstucZzW9Z6aiwqV0",
  authDomain: "restaurant-41a1c.firebaseapp.com",
  projectId: "restaurant-41a1c",
  storageBucket: "restaurant-41a1c.appspot.com",
  messagingSenderId: "947310574046",
  appId: "1:947310574046:web:1fb8d5dead3943de25454f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;