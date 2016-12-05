# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="150">
</p>

### Tema : `Introducción a Bootstrap` 
### Fecha : `2016-11-08`
### Estudiante : `Megan Lucía Toinga Villafuerte`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#node">Node JS</a>
  * <a href="#npm">NPM</a>
  * <a href="#express">Express JS</a>
  * <a href="#http">Métodos HTTP</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Informe NPM`

<a name="objetivos"></a>
## Objetivos

- Instalar el paquete Express JS con npm.
- Ejecutar métodos HTTP.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="node"></a>
### Node JS
Node.js es un entorno de ejecución multiplataforma para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones Entrada/Salida sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo. (Fuente:[Node JS](https://nodejs.org/es/)).

Node js es de código abierto para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. (Fuente:[Wikipedia](https://es.wikipedia.org/wiki/Node.js)).

<br>
<a href="#cabecera">A la cabecera</a>

<p align="center">
<img src="https://platzi.com/blog/content/images/2015/04/NodeJS-4.png" width="250">
</p>

<br>

<a name="npm"></a>
### NPM
NPM es el manejador de paquetes por defecto para Node.js, por lo cual se instala automáticamente con Node js. Este manejador de paquetes se ejecuta desde la linea de comandos y maneja las dependencias y librerías para una aplicación, estas últimas pueden ser las que se encuentren en la página oficial o pueden ser creadas y subidas por el usuario. NPM está escrito enteramente en JavaScript.


(Fuente:[Wikipedia](https://es.wikipedia.org/wiki/Npm)).
<p align="center">
<img src="https://partners.npmjs.com/weekly/weekly32/weekly-header-grace-hopper.png" width="300">
</p>

<br>

<br>
<a href="#cabecera">A la cabecera</a>

<a name="express"></a>
### Express JS
Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. Esta presenta los métodos de programa de utilidad HTTP y middleware disponibles para el usuario. (Fuente:[Express JS](http://expressjs.com/es/)).

<a href="#cabecera">A la cabecera</a>

<p align="center">
    <img src="https://2.bp.blogspot.com/-gat5ozMNEYs/VvDc3Uj0LzI/AAAAAAAAeto/P6BKU-B8Yik65tH7Wb27WL3JBGQ2vH2OQ/s1600/15-Websites-built-with-Express_785.png" width="300" height="">
</p>

<a name="http"></a>
### Métodos HTTP
El navegador emplea métodos HTTP como GET, POST, PUT, DELETE, entre otros, para especificar el tipo de petición que está enviando al servidor. Estos métodos pueden llevar parámetros de acuerdo a la operación que sea ejecutada.

Entre algunos de los métodos http, son:
- **Get.-** Este método sirve para realizar consultar y obtener información del servidor, ya sea un archivo html o de texto, imágenes, xml, entre otros. Es equivalente al READ del CRUD.
- **Post.-** Este método permite ingresar un nuevo recurso en el servidor. Es equivalente al CREATE del CRUD.
- **Put.-** Este método permite actualizar o modificar un recurso existente en el servidor. Es equivalente al UPDATE del CRUD.
- **Delete.-** Este método permite borrar un recurso o registro que se encuentre en el servidor. Es equivalente al DELETE del CRUD.
- **Head.-** Este método permite obtener la cabecera de respuesta que devuelve el servidor, es decir, devuelve los metadaros.
- **Options.-** Este método se usa para saber que otros métodos HTTP están disponibles, para determinado recurso, en el servidor.

(Fuente:[Otro Espacio Blog](https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/)).

<a name="desarrollo"></a>
## Desarrollo del informe

### Instalación Express JS
Se crea un directorio en el cual se va a ubicar la aplicación. Ubicarse en la carpeta.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap1.jpg?raw=true" width="500" height="">
</p>

Se crea el archivo package.json utilizando el comando npm init.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap2.jpg?raw=true" width="500" height="">
</p>

En la consola de comando se mostrarán algunos parámetros a ser configurados, como el nombre del archivo principal de la aplicación, la versión, el autor, entre otros. De igual forma se puede ingresar RETURN para que se configure con los parámetros por defecto.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap3.jpg?raw=true" width="500" height="">
</p>

Se intalla Express en el directorio creado y se guarda la lista de dependencias.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap4.jpg?raw=true" width="500" height="">
</p>

Se puede instalar el servirdor Express de forma temporal sin añadir la lista de dependecias omitiendo la opcion ``--save``.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap5.jpg?raw=true" width="500" height="">
</p>

### Ejemplo
Dentro de la carpeta creada anteriormente, se crea un archivo index.js (El nombre depende del especificado anteriormente como nombre del archivo principal).

El archivo contiene un código dado como ejemplo en la página de Express JS. Se modifica el parámetro de la URL y el mensaje de retorno.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap6.jpg?raw=true" width="500" height="">
</p>

Se guarda el archivo y se ejecuta desde la consola de comandos: ``<node>`` [nombre del archivo].
- Se imprime el puerto en el cual se está ejecutando

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap7.jpg?raw=true" width="500" height="">
</p>

- En el navegador web se ingresa al puerto y URL especificado.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/08-Nodejs-02/Informe/imagenes/cap8.jpg?raw=true" width="500" height="">
</p>

### Métodos HTTP


<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones
- .
- .
- .
- .


<br>
<a href="#cabecera">A la cabecera</a>