/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  nombre:{
		  type:'string',
		  enum:['Bulldog','Chihuahua','Pitbull'], //Validando nombre
		  required:true //validando uno de cada uno
	  },
	  //mascotas es el nombre en plural del modelo
	  mascotas:{
		  //Collection - Nombre del Modelo en Sails
		  collection:'Mascota', //Conexion a la relacion, 
		  //Via: Campo por el cual se va a relacionar - FOREIGN KEY
		  via:'idRaza'
	  }

  }
};

