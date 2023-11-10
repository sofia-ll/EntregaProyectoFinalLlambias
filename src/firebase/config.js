
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1bxuDx6XlS1wrHZOBYgLC6TdVenjeNTw",
    authDomain: "sofiallambias-73262.firebaseapp.com",
    projectId: "sofiallambias-73262",
    storageBucket: "sofiallambias-73262.appspot.com",
    messagingSenderId: "252930622685",
    appId: "1:252930622685:web:e6c60e275227749c690734"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);