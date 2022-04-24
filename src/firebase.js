import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC58osLXaY2BHNbAvprWBupF3h1KPi3des",
  authDomain: "vue3-practica.firebaseapp.com",
  projectId: "vue3-practica",
  storageBucket: "vue3-practica.appspot.com",
  messagingSenderId: "930991670597",
  appId: "1:930991670597:web:516c2665a7482b0aec6a2c",
};

initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };
