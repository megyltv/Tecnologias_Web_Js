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

	editarUsuario: function (req, res) {

		var parametros = req.allParams();

		if (parametros.id) {

			Usuario.findOne({
				id: parametros.id
			}).exec(function (errorInesperado, UsuarioEncontrado) {
				if (errorInesperado) {
					return res.view('vistas/Error', {
						error: {
							desripcion: "Error Inesperado",
							rawError: errorInesperado,
							url: "/ListarUsuarios"
						}
					});
				}
				if (UsuarioEncontrado) {
					return res.view("vistas/Usuario/editarUsuario", {
						usuarioAEditar: UsuarioEncontrado,
						inicioSesion: true
					});
				} else {
					return res.view('vistas/Error', {
						error: {
							desripcion: "El usuario con id: " + parametros.id + " no existe.",
							rawError: "No existe el usuario",
							url: "/ListarUsuarios"
						}
					});
				}
			})
		} else {

			return res.view('vistas/Error', {
				error: {
					desripcion: "No ha enviado el parametro ID",
					rawError: "Faltan Parametros",
					url: "/ListarUsuarios"
				}
			});

		}
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

	},


	editarMascota: function (req, res) {
		var parametros = req.allParams();
		if (parametros.id) {
			Mascota.findOne({
				id: parametros.id
			}).exec(function (error, mascotaEncontrado) {
				if (error) return res.view('vistas/Error', {
					error: {
						descripcion: 'Fallo al buscar la mascota',
						url: '/ListarUsuarios'
					}
				});


				Raza.find().exec(function (error, razasEncontrados) {
					if (error) return res.view('vistas/Error', {
						error: {
							descripcion: 'Fallo al buscar la mascota',
							url: '/crearMascotas'
						}
					});

					return res.view('vistas/Mascota/editarMascota', {
						mascota: mascotaEncontrado,
						razas: razasEncontrados
					})
				});

			});

		} else {
			return res.view('vistas/Error', {
				title: 'Error',
				error: {
					descripcion: 'No existe el ID'
				}
			});
		}
	},
	
	listarMascotas: function (req, res) {

		Mascota.find().exec(function (error, mascotasEncontrados) {
			if (error) return res.serverError()
			return res.view('vistas/Usuario/ListarUsuarios', {
				mascotas: mascotasEncontrados
			})
		});
	},

	crearRaza: function (req, res) {

		return res.view('vistas/Raza/crearRaza')

	},

	editarRaza: function (req, res) {
		var parametros = req.allParams();

		if (parametros.id) {

			Raza.findOne({
				id: parametros.id
			}).exec(function (errorInesperado, RazaEncontrado) {
				if (errorInesperado) {
					return res.view('vistas/Error', {
						error: {
							desripcion: "Error Inesperado",
							rawError: errorInesperado,
							url: "/ListarRazas"
						}
					});
				}
				if (RazaEncontrado) {
					return res.view("vistas/Raza/editarRaza", {
						razaAEditar: RazaEncontrado,

					});
				} else {
					return res.view('vistas/Error', {
						error: {
							desripcion: "El usuario con id: " + parametros.id + " no existe.",
							rawError: "No existe el usuario",
							url: "/ListarRazas"
						}
					});
				}
			})
		} else {

			return res.view('vistas/Error', {
				error: {
					desripcion: "No ha enviado el parametro ID",
					rawError: "Faltan Parametros",
					url: "/ListarRazas"
				}
			});

		}
	},

	listarRazas: function (req, res) {
		Raza.find().exec(function (err, razasEncontradas) {
			if (err) {
				return res.view('vistas/Error', {
					error: {
						descripcion: "Hubo un problema cargando las razas",
						rawError: err,
						url: "/ListarRazas"
					}
				});
			}
			res.view('vistas/Raza/listarRazas', {
				razas: razasEncontradas
			})
		})
	}

};