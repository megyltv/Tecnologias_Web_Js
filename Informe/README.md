# Introducción a SailsJS

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="150">
</p>

### Tema : `Introducción a SailsJS` 
### Fecha : `2017-01-05`
### Estudiante : `Megan Lucía Toinga Villafuerte`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#sailjs">SailJS</a>
  * <a href="#grunt">Grunt</a>
  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a SailJS`

<a name="objetivos"></a>
## Objetivos

- Aplicar estilos en un html utilizando CSS
- Aprender el uso de lenguaje HTML CSS
- Aprender del uso de grid de Bootstrap

<a name="marco-teorico"></a>
## Marco Teorico
<a name="sailjs"></a>
### SailJS
Sails es un framework de Javascript diseñado para parecerse a una arquitectura MVC de frameworks como Ruby on Rails. Hace que el proceso de construcción de aplicaciones en Node.js sea más sencilla, especialmente las APIs, aplicaciones de paginas sumples y con características de tiempo real, como el chat.

Sails tiene como puerto de defecto el 1337. Y se encuentra conformado por las carpetas:
- Assets.- Contiene archivos de Javascript y CSS.
- Public.- Contiene archivos que estan disponibes de forma pública, como imagenes.
- Config.
- Vistas.- Contiene las vistas de la aplicación.

(Fuente: [envatotuts+](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390))

<br>
<a href="#cabecera">A la cabecera</a>

<p align="center">
<img src="https://camo.githubusercontent.com/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width="300">
</p>

<br>

<a name="grunt"></a>
### Grunt
Grunt y los plugins de Grunt son instalados y administrados via npm. Cuando se ejecuta grunt, este busca por ``require()`` que se encuentre instalado localmente. Se encuentra conformado por un grupo de tareas que permite crear plugins propios y scripts que extiendan la funcionalidad básica. (Fuente: [envatotuts+](https://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856))

<p align="center">
<img src="https://www.smashingmagazine.com/wp-content/uploads/2013/10/grund-js-opt.png" width="300">
</p>


<a name="desarrollo"></a>
## Desarrollo del informe

### SailsJS
Se instala el paquete de sails mediante nodejs con el comando ``npm install sails``
<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap1.png?raw=true" width="550" height="">
</p>

Se crea un nuevo proyecto de sail, llamado Mascotas. Para lo cual se ejecuta ``sails [Nombre Proyecto]``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap2.png?raw=true" width="500" height="">
</p>

Una vez creado el proyecto se creará una carpeta con el nombre especificado e internamente se encontrarán las carpetas que conforman sails.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap3.png?raw=true" width="200" height="">
</p>
**Assets**
Dentro de la carpeta assets se encuentran los archivos de css y de estilo, javascript de la aplicación, entre otros.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap4.png?raw=true" width="200" height="">
</p>
    
Se levanta el servidor de sails lift. Se debe tener cuidado de estar ubicado dentro de la carpeta del proyecto para que el archivo a ejecutar pueda ser encontrado.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap5.png?raw=true" width="400" height="">
</p>
    
Se abre un navegador y se ubica el nombre de la máquina, el puerto, y la ubicación hasta llegar al archivo index.html. ``localhost:1337/app/index.html``
 
<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap6.png?raw=true" width="400" height="">
</p>

**Views**
En la carpeta de views, se encuentran los archivos de las vistas de la aplicación, originalmente se encuentran las vistas en caso de que haya algún error, y la página principal por defecto.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap7.png?raw=true" width="200" height="">
</p>

Dentro del archivo de layout, se encuentra una variable ``cssFilesToInject``, en el cual se especifican la ubicación de los archivos que se utilizarán en la aplicación.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap8.png?raw=true" width="400" height="">
</p>

**Pipeline**
En caso de que se definan varios archivos css y no se haya especificado uno solo, esta variable leerá todos, uno después de otro, y se mostrará lo que se encuentre en el último. Esto se conoce como pipeline.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap9.png?raw=true" width="400" height="">
</p>
        
Se actualiza la página y se muestra con los cambios en la vista.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap10.png?raw=true" width="500" height="">
</p>

De igual forma, se puede definir un solo archivo para que sea leído de la carpeta.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap11.png?raw=true" width="" height="">
</p>

Al actualizar el navegador, se ingresa a inspeccionar y se  verifica que está leyendo un solo archivo de estilos.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap12.png?raw=true" width="" height="">
</p>

Dentro del mismo archivo, se encuentra la variable ``jsFilesToInject``. En esta variable en cambio de define los archivos que se van a ejecutar y que se encuentren en assets. 

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap13.png?raw=true" width="" height="">
</p>

En la parte de la vista del layout, se modifica el código a mostrar. Se especifica el body ``<%- body -%>`` puesto que el contenido se leera de otro archivo ubicado en views. Esto permite definir encabezados y pies de página

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap14.png?raw=true" width="" height="">
</p>

Se define en otro archivo de la vista el contenido del body. En este caso en ``homepage.ejs``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap15.png?raw=true" width="500" height="">
</p>

Se puede definir asi mismo, estilos propios para una pagina especifica.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap16.png?raw=true" width="500" height="">
</p>

Se actualiza la pagina y se muestran los cambios realizados

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap17.png?raw=true" width="400" height="">
</p>

En la carpeta de config se encuentra el archivo ``routes.js``, en el cual se definen las rutas que se necesitaran en la aplicacion.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap18.png?raw=true" width="200" height="">
</p>

Se especifica la vista principal o por defecto, ``homepage``, y se especifican las diferentes rutas junto con su vista asignada para cada una.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap19.png?raw=true" width="200" height="">
</p>

Se crea en la carpeta de views, las nuevas vistas definidas en la seccion de rutas, con la extension ``ejs``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap20.png?raw=true" width="200" height="">
</p>

En el navegador se comprueba lo configurado anteriormente, para ello se ingresa al puerto y se ubica la ruta nueva que se haya especificado.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap21.png?raw=true" width="400" height="">
</p>

**Controllers**
<br>	
Sails permite la creacion de controles, para lo cual en la consola de comandos se ejecuta ``sails generate controller [nombre]``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap22.png?raw=true" width="" height="">
</p>

Luego de ejecutar el comando se creara un archivo con un ejemplo de controladores. Este archivo se puede configurar, por ejemplo en este caso se crean tres metodos en el cual el servidor dara una respuesta.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap23.png?raw=true" width="300" height="">
</p>

Para ejecutar los controladores se ingresa en el navegador y se ubica ``localhost:1337/[nombre dado al controlador]/[nombre definido en el archivo]``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap24.png?raw=true" width="300" height="">
</p>

Asi mismo se puede definir para que como resultado retorne un archivo jason.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap25.png?raw=true" width="200" height="">
</p>

De igual forma se pueden definir que se retornen respuestas en formato jason de acuerdo al metodo http que se define o sea necesario utilizar en la aplicacion. En este caso para comprobar se ubico con un if para que regrese un mensaje de acuerdo al metodo http.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap26.png?raw=true" width="200" height="">
</p>

Se comprueba utilizando postman, en el cual se procede a enviar con el metodo DELETE para tener como respuesta lo se especifico

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap27.png?raw=true" width="400" height="">
</p>

Se comprueba con el metodo POST y se obtiene la respuesta especificada.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap28.png?raw=true" width="400" height="">
</p>

<a name="conrec"></a>
## Conclusiones y Recomendaciones
- Sails es un framework de Javascript el cual permite ir creando un proyecto web, pues define los elementos para definir archivos de logica, de estilos, las vistas, las rutas, entre otros. Ademas presenta una organizacion de la informacion en forma de archivos.
- Sails permite la generacion de controladores en los cuales se puede definir retonar un archivo en formato jason, asi como aplicar los metodos de http.
- Es necesario conocer la estructura que presenta Sails para que el desarrollador pueda ubicar los recursos y pueda utilizar eficientemente el framework que ofrece.
- Sails trabaja conjuntamente con Nodejs, pues es un paquete. Esto permite que pueda ejecutar aplicaciones en node y que pueda ser instalado facilmente en el equipo.


<br>
<a href="#cabecera">A la cabecera</a>