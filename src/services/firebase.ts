import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.GRADIANRIA_FIREBASE_API_KEY,
    authDomain: import.meta.env.GRADIANRIA_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.GRADIANRIA_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.GRADIANRIA_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.GRADIANRIA_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.GRADIANRIA_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };