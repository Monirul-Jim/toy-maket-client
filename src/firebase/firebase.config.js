// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:import.meta.env. VITE_APIKEY,
//     authDomain:import.meta.env. VITE_AUTHDOMAIN,
//     projectId:import.meta.env. VITE_PROJECTID,
//     storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//     appId:import.meta.env.VITE_APPID
// };
const firebaseConfig = {
    apiKey: "AIzaSyD_IAWQDK5hiR3YvgnOUxilFJKnazSTVTs",
    authDomain: "my-toy-shop.firebaseapp.com",
    projectId: "my-toy-shop",
    storageBucket: "my-toy-shop.appspot.com",
    messagingSenderId: "1022881936538",
    appId: "1:1022881936538:web:5b2930647712bdb02fdb23"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;