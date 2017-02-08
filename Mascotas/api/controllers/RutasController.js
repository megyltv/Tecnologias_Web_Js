/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	home: function (req, res) {
		// res.view(String: Nombre vista, Datos JSON)
		return res.view('vistas/home', {})

	},
	crearUsuario: function (req, res) {

		return res.view('vistas/Usuario/crearUsuario')

	},
	error: function (req, res) {

		return res.view('vistas/Error', {
			error: {
				descripcion: "Usted esta por error en esta Ruta, dirijase a Inicio",
				rawError: "Ruta equivocada",
				url: "/Inicio"
			}
		})

	},
	listarUsuarios: function (req, res) {

		Usuario.find()
			.exec(function (errorIndefinido, usuariosEncontrados) {

				if (errorIndefinido) {
					return res.view('vistas/Error', {
						error: {
							descripcion: "Hubo un problema cargando los usuarios",
							rawError: errorIndefinido,
							url: "/ListarUsuarios"
						}
					});
				}

				res.view('vistas/Usuario/listarUsuarios', {
					usuarios: usuariosEncontrados
				})

			})

	}

};