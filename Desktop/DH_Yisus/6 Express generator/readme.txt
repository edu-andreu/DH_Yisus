Express Generator es un generador automático de proyectos Express.
Tiene de positivo que genera una estructura de archivos y carpetas propicio para trabajar con MVC.

Nota: NO crea la carpeta "controllers".

Lo primero que tenemos que hacer para poder usar el generador, es instalarlo en la máquina de forma global, con el comando:

$ npm install express-generator -g



Ya estamos listos para iniciar un proyecto. Nos posicionamos en el directorio donde vamos a crear nuestro proyecto y ejecutamos el comando:

$ express nombreAplicacion --ejs 

Nota: "--ejs" es el motor de plantillas que vamos a utilizar. Si no lo especificamos se instala por defecto "pug".

Bien ahora podemos ver que se crearon varias carpetas y archivos correspondientes a nuestro proyecto, pero falta instalar todas las dependencias necesarias (package.json). Para ello, navegamos hasta la carpeta del proyecto y ejecutamos el siguiente comando:

$ npm install

Ahora vemos que se creó la carpeta node_modules. Ya estamos listos para trabajar!

Para ejecutar el proyecto ejecutamos el siguiente comando:

$ nodemon bin/www

Y desde un navegador colocamos: http://localhost:3000/



ENTONCES... ¿qué cosas nos ahorramos?
	Por un lado nos ahorramos de ejecutar los siguientes comandos:
		$ npm init //inicializa el proyecto node
		$ npm install express --save  //instala express
	
	Por otro lado, el generador nos provee de:
		- El Entry point a nuestra app
		- Una configuración inicial estándar
		- Un esqueleto de archivos y directorios como para empezar a trabajar

Nota: Lo único que tenemos que hacer finalmente es crear la carpeta "controllers" par trabajar con controladores.

