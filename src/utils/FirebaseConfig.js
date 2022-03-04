// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAgwkNEQN3_M2LpKe8JwlSGyZSxb8OP3qM",
  authDomain: "pbcloud-ecommerce.firebaseapp.com",
  projectId: "pbcloud-ecommerce",
  storageBucket: "pbcloud-ecommerce.appspot.com",
  messagingSenderId: "545526468059",
  appId: "1:545526468059:web:c9f28ff93a91109e3c6bfe"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;