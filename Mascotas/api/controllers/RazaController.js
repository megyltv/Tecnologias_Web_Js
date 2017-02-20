/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crearRaza: function (req, res) {

		if (req.method == "POST") {

			var parametros = req.allParams();

			if (parametros.nombre) {
				Raza.create({
					nombre: parametros.nombre,
				}).exec(function (err, razaCreada) {

					if (err) {
						return res.view('vistas/Error', {
							error: {
								desripcion: "Error al crear la raza",
								rawError: err,
								url: "/crearRaza"
							}
						});
					}
					Raza.find().exec(function (error, razasEncontradas) {
						if (error) {
							return res.view('vistas/Error', {
								error: {
									desripcion: "Error al crear la raza",
									rawError: err,
									url: "/crearRaza"
								}
							});
						}
						return res.view('vistas/Raza/listarRazas', {
							razas: razasEncontradas
						})
					});

				});
			} else {
				return res.view('vistas/Error', {
					error: {
						desripcion: "No envía todos los parametros",
						rawError: "Fallo en envio de parametros",
						url: "/crearRaza"
					}
				})
			}
		} else {
			return res.view('vistas/Error', {
				error: {
					desripcion: "Error en el uso del Metodo HTTP",
					rawError: "HTTP Invalido",
					url: "/crearRaza"
				}
			});
		}
	},

	BorrarRaza: function (req, res) {
		var parametros = req.allParams();

		if (parametros.id) {

			Raza.destroy({
				id: parametros.id
			}).exec(function (err, RazaRemovida) {
				if (err) {
					return res.view('vistas/Error', {
						error: {
							desripcion: "Tuvimos un Error Inesperado",
							rawError: err,
							url: "/ListarRazas"
						}
					});
				}
				Raza.find().exec(function(err, razasEncontradas) {
					if (err) {
						res.view('vistas/Error', {
							error: {
								desripcion: "Hubo un problema cargando los Usuarios",
								rawError: err,
								url: "/ListarRazas"
							}
						});
					}
					res.view('vistas/Raza/ListarRazas',{
						razas:razasEncontradas
					});
				})
			})


		} else {
			return res.view('vistas/Error', {
				error: {
					desripcion: "Necesitamos el ID para borrar la Raza",
					rawError: "No envia ID",
					url: "/ListarRazas"
				}
			});
		}
		
	}



	//
	//				
	//	BorrarUsuario: function (req, res) {
	//	//		var parametros = req.allParams();
	//	//		if (parametros.id) {
	//			Usuario.destroy({
	//				id: parametros.id
	//			}).exec(function (errorInesperado, UsuarioRemovido) {
	//				if (errorInesperado) {
	//					return res.view('vistas/Error', {
	//						error: {
	//							desripcion: "Tuvimos un Error Inesperado",
	//							rawError: errorInesperado,
	//							url: "/ListarUsuarios"
	//						}
	//					});
	//				}
	//				Usuario.find()
	//					.exec(function (errorIndefinido, usuariosEncontrados) {
	//
	//						if (errorIndefinido) {
	//							res.view('vistas/Error', {
	//								error: {
	//									desripcion: "Hubo un problema cargando los Usuarios",
	//									rawError: errorIndefinido,
	//									url: "/ListarUsuarios"
	//								}
	//							});
	//						}
	//
	//						res.view('vistas/Usuario/ListarUsuarios', {
	//							usuarios: usuariosEncontrados
	//						});
	//					})
	//			})
	//
	//		} else {
	//			return res.view('vistas/Error', {
	//				error: {
	//					desripcion: "Necesitamos el ID para borrar al Usuario",
	//					rawError: "No envia ID",
	//					url: "/ListarUsuarios"
	//				}
	//			});
	//		}
	//	},
	//
	//	editarUsuario: function (req, res) {
	//		var parametros = req.allParams();
	//
	//		if (parametros.idUsuario && (parametros.nombres || parametros.apellidos || parametros.correo)) {
	//
	//			var usuarioEditar = {
	//				nombres: parametros.nombres,
	//				apellidos: parametros.apellidos,
	//				correo: parametros.correo,
	//				password: parametros.password
	//			}
	//
	//			if (usuarioEditar.nombres = "") {
	//				delete usuarioEditar.nombres;
	//			}
	//			if (usuarioEditar.apellidos = "") {
	//				delete usuarioEditar.apellidos;
	//			}
	//			if (usuarioEditar.correo = "") {
	//				delete usuarioEditar.correo;
	//			}
	//			if (usuarioEditar.password = "") {
	//				delete usuarioEditar.password;
	//			}
	//			
	//
	//
	//			Usuario.update({
	//				id: parametros.idUsuario
	//			}, usuarioEditar).exec(function (errorInesperado, UsuarioRemovido) {
	//				if (errorInesperado) {
	//					return res.view('vistas/Error', {
	//						error: {
	//							desripcion: "Tuvimos un Error Inesperado",
	//							rawError: errorInesperado,
	//							url: "/ListarUsuarios"
	//						}
	//					});
	//				}
	//				Usuario.find()
	//					.exec(function (errorIndefinido, usuariosEncontrados) {
	//
	//						if (errorIndefinido) {
	//							res.view('vistas/Error', {
	//								error: {
	//									desripcion: "Hubo un problema cargando los Usuarios",
	//									rawError: errorIndefinido,
	//									url: "/ListarUsuarios"
	//								}
	//							});
	//						}
	//
	//						res.view('vistas/Usuario/ListarUsuarios', {
	//							usuarios: usuariosEncontrados
	//						});
	//					})
	//			})
	//
	//		} else {
	//			return res.view('vistas/Error', {
	//				error: {
	//					desripcion: "Necesitamos que envies el ID y nombres, apellidos o correo",
	//					rawError: "No envia ID",
	//					url: "/ListarUsuarios"
	//				}
	//			});
	//		}
	//
	//		Usuario.find().exec(function (errorIndefinido, usuariosEncontrados) {
	//			if (errorIndefinido) {
	//				return res.view('vistas/Error', {
	//					error: {
	//						desripcion: "Hubo un error cargando los usuarios",
	//						rawError: errorIndefinido,
	//						url: "/ListarUsuarios"
	//					}
	//				});
	//			}
	//			res.view("vistas/Usuario/editarUsuario", {
	//				usuarios: usuariosEncontrados
	//			})
	//		})
	//
	//	}


};