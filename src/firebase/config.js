
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDGLhwNiL26OUlpW-vmefJDhsEa1zHKUiY",
    authDomain: "chat-react-99e07.firebaseapp.com",
    projectId: "chat-react-99e07",
    storageBucket: "chat-react-99e07.appspot.com",
    messagingSenderId: "944885143039",
    appId: "1:944885143039:web:11576676d566da49cc03ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

/* export const initFirebase = () => app */