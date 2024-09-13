// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1M7wyWXcPtVk49l1sd7icHpwCnnI0zyQ",
  authDomain: "netflix-clone-4628c.firebaseapp.com",
  projectId: "netflix-clone-4628c",
  storageBucket: "netflix-clone-4628c.appspot.com",
  messagingSenderId: "399462443074",
  appId: "1:399462443074:web:ff5f3cf072f84a492da5db",
  measurementId: "G-8M5YNWS7SV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
