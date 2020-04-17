const express = require('express');
const router = express();

// /productos
router.get('/', (req,res) => {
   res.send('<h1> Bienvenido a la página de Productos. </h1>');
});

// /productos/<id>
// Recibimos un parámetro obligatorio llamado id.
// Mediante req.params.id podemos acceder al valor del parámetro.
router.get('/:id', function(req, res){
	//console.log(req.params.id);
   res.send('<h1> ID del producto: ' + req.params.id);
});

// /productos/<id>/comentarios/<idComentario>
// Recibimos un parámetro obligatorio llamado id.
// Recibimos un parámetro opcional llamado idComentarios.
router.get('/:id/comentarios/:idComentario?', function(req, res){
	//console.log(req.params.idComentario);
   if (req.params.idComentario == undefined) {
      res.send('<h1> Comentarios </h1> <h3>Esta es la página de comentarios.</h3> <p>Por favor, especifique un comentario de la siguiente manera: productos/idProd/comentarios/idComentario</p>.');
   }else{
      res.send('<h1> Comentarios </h1> <h3>Esta es la página de comentarios.</h3> <p>Su id de comentario es el siguiente: ' + req.params.idComentario);
   }
});

module.exports = router;
