const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor corriendo...'));

// Ruta de iniciio
app.get('/', (req, res) => {
   res.send('Hola mundo!');
});

// Recibimos un parámetro obligatorio llamado id.
// Mediante req.params.id podemos acceder al valor del parámetro.
app.get('/productos/:id', function(req, res){
	//console.log(req.params.id);
   res.send('<h1> ID del producto: ' + req.params.id);
});


// Recibimos un parámetro obligatorio llamado id.
// Recibimos un parámetro opcional llamado idComentarios.
app.get('/productos/:id/comentarios/:idComentario?', function(req, res){
	//console.log(req.params.idComentario);
   if (req.params.idComentario == undefined) {
      res.send('<h1> Comentarios </h1> <h3>Esta es la página de comentarios.</h3> <p>Por favor, especifique un comentario de la siguiente manera: productos/<id>/comentarios/<idComentario></p>.');
   }else{
      res.send('<h1> Comentarios </h1> <h3>Esta es la página de comentarios.</h3> <p>Su id de comentario es el siguiente: ' + req.params.idComentario);
   }
});
