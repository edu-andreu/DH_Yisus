// Instalé la librería nodemon para no tener que estar apagando y levantando el server cada vez que modifico la app. Ejecutar con el comando $ nodemon index.js
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor corriendo...'));

// localhost:3000/          Ruta inicial (método GET)
app.get('/', (req, res) => {
   res.send('Hola mundo!');
});

// localhost:3000/contacto
app.get('/contacto', (req, res) => {
   res.send('<H1>Hola!</H1> <p>Esta es la página de contacto!</p>');
});

// localhost:3000/objeto
let objeto = {
   nombre: 'Pedro',
   edad: 35
};
app.get('/objeto', (req, res) => {
   res.send(objeto); // devuelve una representacion json del objeto
});

// localhost:3000/array
let array = ["hola", "35", "cosa"];
app.get('/array', (req, res) => {
   res.send(array); // devuelve una representacion json del array
});

// Ruta mediante método POST (sólo será posible probarla con el programa Postman o similar)
let producto = {
  tipoProducto: "living",
  precio: 1245,
  cantidad: 300
}
app.post('/producto/crear', (req, res) => {
   res.send(producto);
});
