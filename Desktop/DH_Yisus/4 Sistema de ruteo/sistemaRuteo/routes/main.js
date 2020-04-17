const express = require('express');
const router = express();

// Ruta de inicio
router.get('/', (req, res) => {
   res.send('<h1>Bienvenido al Home</h1> <p> Hola Mundo </p>');
});

// Ruta Contacto
router.get('/contacto', (req, res) => {
   res.send('<h1>Bienvenido a la página de contacto </h1>');
});

// No se encontró la página
router.get('/*', (req, res) => {
   res.send('<h1>No se encontró la página =( </p>');
});

module.exports = router;
