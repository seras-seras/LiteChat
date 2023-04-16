
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDqCU8PGkFbEqrWvqeuaTK7LRDpwa5qb_Y",
  authDomain: "lite-chat-3c97c.firebaseapp.com",
  projectId: "lite-chat-3c97c",
  storageBucket: "lite-chat-3c97c.appspot.com",
  messagingSenderId: "169043443920",
  appId: "1:169043443920:web:280896721915ca8913ded5"

};

 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore(app);