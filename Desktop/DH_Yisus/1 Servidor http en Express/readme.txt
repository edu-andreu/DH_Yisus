0- Creo la carpeta del proyecto y me posiciono allí mediante la consola

1- Desde la consola escribo el comando
$ npm init

   Al ejecutar el comando anterior me pide completar:
   -El nombre del proyecto
   -La versión
   -La descripción
   -El entry point
   -Algunos datos más...

   Nota: puedo ponerle ENTER a todo y dejar lo que viene por defecto, o completarlo (recomendado)...

   Importante: si no quiero completar toda esta info y dejar la que viene por defecto puedo usar el comando:

   $ npm init -y

2- Al crearse el proyecto de node, se creará dentro del directorio principal el archivo package.json
Este archivo tiene toda la información del proyecto, como las dependencias y el entry point a la aplicación.

3- Ahora podemos instalar el framework express de la siguiente manera:
$ npm install express --save

Con el comando --save estamos guardando, dentro de la propiedad "dependences" del archivo package.json, una referencia a la librería que estamos instalando. De esta manera, quien quiera clonar el proyecto, podrá instalar todas las dependencias que el mismo necesita para funcionar haciendo uso del comando $npm install. Nota: Esto nos indica que la carpeta node_modules no necesita seguimiento Git! así que podemos ignorar dicha carpeta (con el archivo .gitignore).

4- Si ahora ingresamos al a carpeta del proyecto vamos a encontrar:
- node_modules/
- package.json
- package-lock.json

Pero no tenemos nuestro entry point a la aplicación! es necesario entonces crear el archivo index.js

5- Abrimos el index.js y colocamos el siguiente código:

const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor corriendo...'));

app.get('/', (req, res) => {
   res.send('Hola mundo!');
});

6- Ahora sólo necesitamos ejecutar nuestra aplicación, es decir, levantar nuestro servidor.
$ node index.js

Se mostrará el mensaje de consola "Servidor corriendo...". Y podemos ingresar a nuestro navegador y abrir: 
http://localhost:3000/