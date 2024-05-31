import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAbKsNGjkeJrz1FC0RBYvxqwnJw0yIXNvo",
  authDomain: "pokedex-d775a.firebaseapp.com",
  projectId: "pokedex-d775a",
  storageBucket: "pokedex-d775a.appspot.com",
  messagingSenderId: "521907609914",
  appId: "1:521907609914:web:8eaf39bbe0a9f2ae55b003"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
