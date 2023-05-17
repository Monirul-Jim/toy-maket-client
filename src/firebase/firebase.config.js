// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    VITE_APIKEY: "AIzaSyD_IAWQDK5hiR3YvgnOUxilFJKnazSTVTs",
    VITE_AUTHDOMAIN: "my-toy-shop.firebaseapp.com",
    VITE_PROJECTID: "my-toy-shop",
    VITE_STORAGEBUCKET: "my-toy-shop.appspot.com",
    VITE_MESSAGINGSENDERID: "1022881936538",
    VITE_APPID: "1:1022881936538:web:5b2930647712bdb02fdb23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;