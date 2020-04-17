let productoController = {
   //--------------------------------------------------------------------
   getIndex: (req,res) => {
      res.send('<h1> Bienvenido a la página de Productos. </h1>');
   },
   //--------------------------------------------------------------------
   getId: function(req, res){
   	//console.log(req.params.id);
      res.send('<h1> ID del producto: ' + req.params.id);
   },
   //--------------------------------------------------------------------
   getIdComentario: function(req, res){
   	//console.log(req.params.idComentario);
      if (req.params.idComentario == undefined) {
         res.send('<h1> Comentarios </h1> <h3>Esta es la página de comentarios.</h3> <p>Por favor, especifique un comentario de la siguiente manera: productos/idProd/comentarios/idComentario</p>');
      }else{
         res.send('<h1> Comentarios </h1> <h3>Esta es la página de comentarios.</h3> <p>Su id de comentario es el siguiente: ' + req.params.idComentario);
      }
   }
   //--------------------------------------------------------------------
};

module.exports = productoController;
