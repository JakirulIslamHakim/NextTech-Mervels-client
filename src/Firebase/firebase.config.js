import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWuE-8N_ytRY99juIl2wgMcTiteD0KyGk",
  authDomain: "nextech-marvels.firebaseapp.com",
  projectId: "nextech-marvels",
  storageBucket: "nextech-marvels.appspot.com",
  messagingSenderId: "446939073261",
  appId: "1:446939073261:web:ef31ffce93b16d86d81ae4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
