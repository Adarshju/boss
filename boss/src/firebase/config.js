import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3BbSvSlPIY20Ff6aFmEGtHNA0pCVlEEk",
  authDomain: "test-d9504.firebaseapp.com",
  projectId: "test-d9504",
  storageBucket: "test-d9504.appspot.com",
  messagingSenderId: "793320717206",
  appId: "1:793320717206:web:e8629f7889da4b0eda3bb7",
  measurementId: "G-S106Q97N6M"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db
