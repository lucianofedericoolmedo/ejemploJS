// Importar el módulo de Express
const express = require('express');
const path = require('path');

// Crear una instancia de la aplicación Express
const app = express();

// Establecer la carpeta 'public' como la carpeta que contiene los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
