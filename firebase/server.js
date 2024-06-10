const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();

// Configuración para leer variables de entorno desde un archivo .env
require('dotenv').config();

// Usa cors para permitir solicitudes desde cualquier origen
app.use(cors());

app.get('/firebase-credentials', (req, res) => {
  // Construye un objeto con las credenciales de Firebase a partir de las variables de entorno
  const credentials = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

  // Envía las credenciales como respuesta JSON
  res.json(credentials);
});

// Puerto para el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor de credenciales en ejecución en el puerto ${PORT}`);
});
