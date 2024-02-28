import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDAqmiUtfrxBNoYVpnZG-_avPDNZ7L03IU",
  authDomain: "vision-auto-a4fb6.firebaseapp.com",
  projectId: "vision-auto-a4fb6",
  storageBucket: "vision-auto-a4fb6.appspot.com",
  messagingSenderId: "1028224423244",
  appId: "1:1028224423244:web:47243f187e321f7a88abe9",
  measurementId: "G-WVL9YBK7TH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);