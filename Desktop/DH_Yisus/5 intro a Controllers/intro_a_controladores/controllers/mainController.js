let mainController = {
   getIndex: (req, res) => {
      res.send('<h1>Bienvenido al Home</h1> <p> Hola mundo cruel! </p>');
   },
   getContacto: (req, res) => {
      res.send('<h1>Bienvenido a la página de contacto </h1>');
   },
   getAdressNotFound: (req, res) => {
      res.send('<h1>No se encontró la página =( </p>');
   }
};
module.exports = mainController;
