Rutas parametrizadas
Usando la misma estructura básica para definir una ruta, aclaramos en el path, cuál es el parámetro que vamos a recibir. Esto se hace anteponiendo los ":" (dos puntos) al nombre del parámetro, para todos los parámetros. Además, si queremos especificar un parámetro opcional, tenemos que posponer un "?" (signo de interrogación) al nombre del parámetro que queremos que sea opcional.

Ejemplos:


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


Nota: nótese que un parámetro obligatorio lleva los dos puntos adelante del nombre del parámetro, mientras que uno opcional lleva el signo ? después del nombre.