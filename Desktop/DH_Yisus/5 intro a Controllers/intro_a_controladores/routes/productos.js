const express = require('express');
const router = express();
const productoController = require('../controllers/productoController');

// /productos
router.get('/', productoController.getIndex);

// /productos/<id>
// Recibimos un parámetro obligatorio llamado id.
// Mediante req.params.id podemos acceder al valor del parámetro.
router.get('/:id', productoController.getId);

// /productos/<id>/comentarios/<idComentario>
// Recibimos un parámetro obligatorio llamado id.
// Recibimos un parámetro opcional llamado idComentarios.
router.get('/:id/comentarios/:idComentario?', productoController.getIdComentario);

module.exports = router;
