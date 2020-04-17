const express = require('express');
const router = express();
const mainController = require('../controllers/mainController.js');

// Ruta de inicio
router.get('/', mainController.getIndex);

// Ruta Contacto
router.get('/contacto', mainController.getContacto);

// No se encontró la página
router.get('/*', mainController.getAdressNotFound);

module.exports = router;
