// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApFpG2QQV_N1a7qZPB5V8mxOvQ88MqLKM",
  authDomain: "born2learn-e8dae.firebaseapp.com",
  projectId: "born2learn-e8dae",
  storageBucket: "born2learn-e8dae.appspot.com",
  messagingSenderId: "1093736494396",
  appId: "1:1093736494396:web:e89d0df3ce68c1d21bda39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app