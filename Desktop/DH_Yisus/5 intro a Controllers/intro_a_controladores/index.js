const express = require('express');
const app = express();

// Importación de Rutas
let routes_productos = require('./routes/productos.js');
let routes_main = require('./routes/main.js');

// Servidor Http
app.listen(3000, () => console.log('Servidor corriendo...'));

// Rutas particulares: productos
app.use('/productos', routes_productos);

// Rutas generales (main): home, contacto, otras
app.use('/', routes_main);
