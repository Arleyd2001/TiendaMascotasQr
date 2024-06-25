// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { fetchCredentials } from './utils/fetchCredentials';

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

// Función para esperar la inicialización de Firebase
const waitForFirebaseInit = () => {
  return new Promise((resolve, reject) => {
    if (appFirebase && auth && db && storage) {
      resolve({ appFirebase, auth, db, storage });
    } else {
      const interval = setInterval(() => {
        if (appFirebase && auth && db && storage) {
          clearInterval(interval);
          resolve({ appFirebase, auth, db, storage });
        }
      }, 100);
    }
  });
};

// Inicializar Firebase al cargar el módulo
initFirebase();

export { initFirebase, waitForFirebaseInit,auth,db,appFirebase,storage};
