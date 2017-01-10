/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	crearUsuario: function (req, res) {
		//Se accede asi: /Usuario/crearUsuario

		//Guardando todos los parametros en la variable parametros
		var parametros = req.allParams()
		console.log(parametros);

		if (req.method == 'POST') {
			if (parametros.nombres && parametros.apellidos) {
				//creo usuario
				Usuario.create({
					nombres: parametros.nombres,
					apellidos: parametros.apellidos,
					correo: parametros.correo
				}).exec(function (err, usuarioCreado) {

					if (err) return res.serverError()

					sails.log.info(usuarioCreado);
					return res.ok(usuarioCreado);
				});

			} else {
				//bad request
				return res.badRequest('No envia todos los parametros');
			}

		}else{
			return res.badRequest('Metodo Invalido');
		}


		//		/Usuario/crearUsuario?nombres=Megan&apellidos=Toinga
		//		post
		//		
		//		correo:megann.toinga@epn.edu.ec


	}


};