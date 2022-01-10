import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAIOGTvl6GJA9--TWFKcg13WXlliG-1BDE",
  authDomain: "caseapp-8a255.firebaseapp.com",
  databaseURL: "https://caseapp-8a255.firebaseio.com",
  projectId: "caseapp-8a255",
  storageBucket: "caseapp-8a255.appspot.com",
  messagingSenderId: "653130125039",
  appId: "1:653130125039:web:ed05ea5ec06a4312ed151a",
  measurementId: "G-PG61QKJG4R"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();