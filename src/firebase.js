import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "video-13238.firebaseapp.com",
  projectId: "video-13238",
  storageBucket: "video-13238.appspot.com",
  messagingSenderId: "6356341465",
  appId: "1:6356341465:web:84f241ad7e6dd564d6e4c8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
