// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { fetchCredentials } from './utils/fetchCredentials';

// Variables para almacenar las instancias de Firebase
let appFirebase;
let auth;
let db;
let storage;

const initFirebase = async () => {
  const credentials = await fetchCredentials();
  if (credentials) {
    appFirebase = initializeApp(credentials);
    auth = getAuth(appFirebase);
    db = getFirestore(appFirebase);
    storage = getStorage(appFirebase);
  } else {
    console.error('Could not initialize Firebase due to missing credentials');
  }
};

// Inicializar Firebase al cargar el módulo
initFirebase();

export { appFirebase, auth, db, storage, initFirebase };
