import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVTL4i3r7GyLPxn0WXIHKhZxGo6kLmRGc",
  authDomain: "matching-colors.firebaseapp.com",
  projectId: "matching-colors",
  storageBucket: "matching-colors.appspot.com",
  messagingSenderId: "24249652243",
  appId: "1:24249652243:web:4ad156ad8337676de49be6",
  measurementId: "G-6FVHFY1SH1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db };