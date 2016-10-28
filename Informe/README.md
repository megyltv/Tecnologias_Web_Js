# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="150">
</p>

### Tema : `Introducción a CSS` 
### Fecha : `2016-11-02`
### Estudiante : `Megan Lucía Toinga Villafuerte`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#defcss">Definicion CSS</a>
  * <a href="#estcss">Estructura CSS</a>
  * <a href="#vencss">Ventajas CSS</a>
  * <a href="#deflib">Definicion Librería y Framework</a>
  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a CSS`

<a name="objetivos"></a>
## Objetivos

- Aplicar estilos en un html utilizando CSS
- Aprender el uso de lenguaje HTML CSS
- Aprender del uso de grid de Bootstrap

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defcss"></a>
### Definicion CSS
CSS u Hojas de Estilo en Cascada, es un mecanismo que describe como se va a mostrar o imprimir un documento en la pantalla. Esta forma de descripcion de estilos da a los desarrolladores el control sobre el estilo y el formato de sus documentos. CSS se utiliza para dar estilo a documentos HTML y XML, asi como permite separar el contenido de la presentacion. 

Los Estilos definen la forma de mostrar los elementos HTML y XML. Estos mismo pueden controlar el estilo y formato de multiples paginas Web al mismo tiempo, puesto que un cambio en un elemento marcado en el CSS afectara a todas las paginas vinculadas a la misma.
(Fuente: [W3C](http://www.w3c.es/Divulgacion/GuiasBreves/HojasEstilo))

<br>
<a href="#cabecera">A la cabecera</a>

<p align="center">
<img src="http://blogldc.s3.amazonaws.com/wp-content/uploads/2015/07/2015_07_17_LearnCSS.jpg" width="300">
</p>

<br>

<a name="estcss"></a>
### Estructura CSS
CSS funciona en base a declaraciones sobre el estilo de uno o varios elementos. Una hoja de estilo puede presentar varias reglas a ser aplicadas a un documento HTML o XML, estando esta compuesta por dos partes: un selector y una declaracion, y esta ultima esta compuesta por una propiedad y un valor.

En el selector se especifica los elementos que van a ser afectados en el documento, y puede ser un nombre de:
- Etiqueta
- Clase
- id

En la declaracion se indica o establece cual sera el efecto. En el siguiente ejemplo, se indica que todos los elementos ```h1``` seran afectados por la declaracion de propiedad de color que tiene un valor de azul. 

```h1 {color:azul}```
- h1, es el selector
- {color:azul}, es la declaracion

Existen varias formas de dar estilo a un documento:
- Uso de una hoja de estilo externo que es vinculada a un documento mediante la etiqueta ```<link>``` en la seccion ```<head>```.
- Utilizando la etiqueta ```<style>```, en el interior del documento al que se le quiere dar un estilo, situtado generalmente en la seccion ```<head>```.
- Usando directamente el atributo de estilo en los elementos que lo permitan. (Fuente: [W3C](http://www.w3c.es/Divulgacion/GuiasBreves/HojasEstilo))

<br>
<a href="#cabecera">A la cabecera</a>

<p align="center">
<img src="http://s3.amazonaws.com/videos_mxm/caretas/estructura-css_37167_1_11380.jpg" width="250">
</p>

<a name="vencss"></a>
### Ventajas de CSS
- Permite separar en archivos aparte lo que es texto, imagen o documento (HTML) de la forma de presentacion (CSS).
- Al tener separado ayuda a que se mas comodo al momento de buscar errores o de cambiar la apariencia de la pagina.
- Permite aplicar el mismo estilo a distintos elementos de la pagina, e incluso utilizarlo en varias paginas.
(Fuente:[Aprende Web](http://aprende-web.net/css/))
- Las hojas de estilo pueden usarse con otros lenguajes de programacion para conseguir efectos dinamicos en las paginas.
- Se pueden especificae hojas de estilo para diferentes navegadores.
(Fuente:[prosolutions](https://www.prosolutions.es/blog/ventajas-y-desventajas-de-css/))

<a href="#cabecera">A la cabecera</a>

<a name="deflib"></a>
### Definicion de Librería y Framework
Una Libreria o Biblioteca es una coleccion o sonjunto de subprogramas usados para desarrollar software. Generalmente no son ejecutables, pero si pueden ser utilizados por elementos ejecutables que las necesitan para funcionar o para afectar su comportamiento. Las librerias son llamadas al principio de la pagina, y para recibir este nombre deben de poder usarse en distintas paginas, del mismo o de diferente sitio. (Fuente: [Aprende Web](http://aprende-web.net/librerias/))

Un Framework ofrece componentes como una libreria, pero asi mismo provee plantillas o estructuras que definen el funcionamiento de las aplicaciones. Es decir, ofrece plantillas las cuales pueden ser adaptadas a diferentes necesidades. El uso de framework hace mas facil entender otras aplicaciones que lo hayan aplicado puesto que comparten un esqueleto similar. (Fuente:[GNUstep](https://gnustep.wordpress.com/gnustep-a-fondo/%C2%BFque-es-un-framework-%C2%BFcomo-se-utiliza/))

<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### CSS
Estilos definidos dentro del archivo html.
- En ```<head>``` se ubica las etiquetas ```<style>```.
    <p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap1.jpg?raw=true" width="300" height="">
    </p>

- **Por etiqueta.-** Se especifica el nombre del elemento o etiqueta de html. Adentro se indica que el atributo de color de fondo (background-color) de la etiqueta ```<h1>```, ```<html>``` y ```<body>``` es igual a un color especifico. Es preferible evitar poner el color por su nombre, puesto que unos navegadores no lo reconocen.
<br>
```
     nombreTag{
        Propiedad1:valorPropiedad1;
        Propiedad2:valorPropiedad2;
        Propiedad3:valorPropiedad3;
    }```
<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap2.jpg?raw=true" width="300" height="">
</p>

- **Por clase.-** Se define un nombre para una clase y adentro se define un nombre para la propiedad y el valor del mismo. 
    ```
    .nombreClase{
        Propiedad1:valorPropiedad1;
        Propiedad2:valorPropiedad2;
    }```
<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap3.jpg?raw=true" width="500" height="">
</p>
    
En una etiqueta se pueden indicar varios nombres de clases poniendo una despues de otra.
<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap11.jpg?raw=true" width="400" height="">
</p>
    
    
    
- **Por ID.- ** Se precede con el simbolo de numero y luego el nombre del id. Adentro se define la propiedad y el valor de la misma. Para utilizar este metodo es necesario definir el atributo ```id``` en las etiquetas de html.
```
    #nombreId{
        Propiedad1:valorPropiedad1;
        Propiedad2:valorPropiedad2;
    }```
<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap4.jpg?raw=true" width="400" height="">
</p>
    
    
Estilos definidos en un archivo a parte ```.css```
- Se crea un archivo ```.css```. Este archivo puede ubicarse a la misma altura del index.html o puede ser ubicado dentro de otra carpeta.
    <p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap5.jpg?raw=true" width="300" height="">
    </p>
    
- Se ubica lo que se encontraba en ```<style>```, solo el codigo de las reglas de css, sin la etiqueta ```<style>```.
    <p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap6.jpg?raw=true" width="400" height="">
    </p>

- En el archivo html en la seccion ```<head>``` se ubica la etiqueta ```<link>```, se indica el tipo de archivo, stylesheet, y se indica la ubicacion del mismo.

    Ubicacion:
    <br>En la misma altura: ```href="estilos.css"```
    <br>En una carpeta: ```href="estilos/estilos.css"```
    <br>En una carpeta superior: ```href="../estilos/estilos.css"```
    <br>
    <p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap7.jpg?raw=true" width="500" height="">
    </p>

- Se pueden crear y referenciar a mas de una hoja de estilo.
    <p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap8.jpg?raw=true" width="500" height="">
    </p>
        

- En caso de que existan varias hojas de estilo, y en ambas haya un diferente valor de propiedad para una misma etiqueta, se seleccionara el valor que se encuentre en la ultima hoja de estilo.
    <p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap9.jpg?raw=true" width="500" height="">
    </p>

Estilos definidos en cada etiqueta de html
- En la etiqueta que se desee dar un estilo, se ubica como atributo un ```style```, y se especifica el parametro y el valor del parametro.
    <p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/02-css/Informe/imagenes/cap10.jpg?raw=true" width="" height="">
    </p>

### Introduccion a Bootstrap - Grid



<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/informes/Informe1/imagenes/cap30.jpg?raw=true" width="300" height="">
</p>

## Conclusiones y Recomendaciones
- La herramienta de inspeccionar del navegador permite conocer información sobre el servidor del cual obtiene la información, así como permite modificar los atributos de las etiquetas.Estos atributos al ser modificados en el navegador no persisten, por lo cual si se desea agregar o modificar algún atributo se lo debe realizar en el código de la página.
- Existe una gran variedad de etiquetas html para ubicar diferentes elementos en la pagina web, como son diferentes encabezados, párrafos, imágenes, hipervínculos, tablas, entre otros.
- Se aprendió unas herramientas de desarrollo web como postman e inspector web. En la primera herramienta se puede conocer más sobre los métodos http, mientras que en la segunda se tiene información sobre el servidor, los documentos que se reciben, el código fuente, entre otros.
- Es recomendable conocer los códigos de estado, o al menos los grupos, para de esta manera ubicar de que tipo es el aviso que se está recibiendo.
- En el lenguaje html es importante acordarse de que cada etiqueta abierta tiene que ser cerrada. Tambien existen unas etiquetas que presenta excepción de esta regla como ``` <br> ``` e ``` <img > ```.


<br>
<a href="#cabecera">A la cabecera</a>