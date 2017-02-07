/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

	crearUsuario: function (req, res) {
		if (req.method == "POST") {
			var parametros = req.allParams();
			if (parametros.nombres && parametros.apellidos) {
				
				var usuarioCrear={
					nombres:parametros.nombres,
					apellidos: parametros.apellidos,
					correo: parametros.correo
				}
				

				if (parametros.correo == "") {
					delete usuarioCrear.correo;
				}

				//Metodos con el modelo
				Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {

					if (err) {
						return res.view('vistas/Error', {
							error: {
								descripcion: "Fallo al crear usuario",
								rawError: err,
								url: "/crearUsuario"
							}
						});
					}

					return res.view("vistas/Usuario/crearUsuario");


				}

			)} else {
				return res.view('vistas/Error', {
					error: {
						descripcion: "Llene todos los parametros, apellidos y nombres",
						rawError: "Fallo en envio de parametros",
						url: "/crearUsuario"
					}
				})
			}

		} else {
			return res.view('vistas/Error', {
				error: {
					descripcion: "Usted en el uso del Metodo HTTP",
					rawError: "HTTP Invalido",
					url: "/crearUsuario"
				}
			})
		}
	}
};