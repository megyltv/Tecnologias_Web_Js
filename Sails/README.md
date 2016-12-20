## Comandos Importantes

### Instalar sailsjs


Sailjs es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real.

´´´ 
> npm install -g sails
´´´ 

El -g nos deja utilizarlo globalmente

### Crear Proyecto nuevo 

´´´ 
> sails new nombreProyecto
´´´

### Levantar el servidor 

´´´ 
> sails lift
´´´

´´´ 
> node app.js
´´´

Sails les pide opciones si no estan definidas, las opciones son:
- 1: SAFE MODE no se va a alterar la base de datos
- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos, por ejemplo
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos

## Servidor Web de Sailsjs

El servidor web de sails se encuentra localizado en la carpeta **assets**