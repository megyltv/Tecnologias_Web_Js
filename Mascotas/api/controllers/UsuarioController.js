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

				var usuarioCrear = {
					nombres: parametros.nombres,
					apellidos: parametros.apellidos,
					correo: parametros.correo
				}

				if (usuarioCrear.correo == "") {
					delete usuarioCrear.correo
				}

				Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {

					if (err) {
						return res.view('vistas/Error', {
							error: {
								desripcion: "Fallo al crear el Usuario",
								rawError: err,
								url: "/CrearUsuario"
							}

						});
					}

					Usuario.find()
						.exec(function (errorIndefinido, usuariosEncontrados) {

							if (errorIndefinido) {
								res.view('vistas/Error', {
									error: {
										desripcion: "Hubo un problema cargando los Usuarios",
										rawError: errorIndefinido,
										url: "/ListarUsuarios"
									}
								});
							}

							res.view('vistas/Usuario/ListarUsuarios', {
								usuarios: usuariosEncontrados
							});
						})

				})


			} else {

				return res.view('vistas/Error', {
					error: {
						desripcion: "Llena todos los parametros, apellidos y nombres",
						rawError: "Fallo en envio de parametros",
						url: "/CrearUsuario"
					}

				});

			}


		} else {

			return res.view('vistas/Error', {
				error: {
					desripcion: "Error en el uso del Metodo HTTP",
					rawError: "HTTP Invalido",
					url: "/CrearUsuario"
				}
			});

		}

	},

	BorrarUsuario: function (req, res) {

		var parametros = req.allParams();

		if (parametros.id) {

			Usuario.destroy({
				id: parametros.id
			}).exec(function (errorInesperado, UsuarioRemovido) {
				if (errorInesperado) {
					return res.view('vistas/Error', {
						error: {
							desripcion: "Tuvimos un Error Inesperado",
							rawError: errorInesperado,
							url: "/ListarUsuarios"
						}
					});
				}
				Usuario.find()
					.exec(function (errorIndefinido, usuariosEncontrados) {

						if (errorIndefinido) {
							res.view('vistas/Error', {
								error: {
									desripcion: "Hubo un problema cargando los Usuarios",
									rawError: errorIndefinido,
									url: "/ListarUsuarios"
								}
							});
						}

						res.view('vistas/Usuario/ListarUsuarios', {
							usuarios: usuariosEncontrados
						});
					})
			})

		} else {
			return res.view('vistas/Error', {
				error: {
					desripcion: "Necesitamos el ID para borrar al Usuario",
					rawError: "No envia ID",
					url: "/ListarUsuarios"
				}
			});
		}
	},

	editarUsuario: function (req, res) {
		var parametros = req.allParams();

		if (parametros.idUsuario && (parametros.nombres || parametros.apellidos || parametros.correo)) {

			var usuarioEditar = {
				nombres: parametros.nombres,
				apellidos: parametros.apellidos,
				correo: parametros.correo,
				password: parametros.password
			}

			if (usuarioEditar.nombres = "") {
				delete usuarioEditar.nombres;
			}
			if (usuarioEditar.apellidos = "") {
				delete usuarioEditar.apellidos;
			}
			if (usuarioEditar.correo = "") {
				delete usuarioEditar.correo;
			}
			if (usuarioEditar.password = "") {
				delete usuarioEditar.password;
			}



			Usuario.update({
				id: parametros.idUsuario
			}, usuarioEditar).exec(function (errorInesperado, UsuarioRemovido) {
				if (errorInesperado) {
					return res.view('vistas/Error', {
						error: {
							desripcion: "Tuvimos un Error Inesperado",
							rawError: errorInesperado,
							url: "/ListarUsuarios"
						}
					});
				}
				Usuario.find()
					.exec(function (errorIndefinido, usuariosEncontrados) {

						if (errorIndefinido) {
							res.view('vistas/Error', {
								error: {
									desripcion: "Hubo un problema cargando los Usuarios",
									rawError: errorIndefinido,
									url: "/ListarUsuarios"
								}
							});
						}

						res.view('vistas/Usuario/ListarUsuarios', {
							usuarios: usuariosEncontrados
						});
					})
			})

		} else {
			return res.view('vistas/Error', {
				error: {
					desripcion: "Necesitamos que envies el ID y nombres, apellidos o correo",
					rawError: "No envia ID",
					url: "/ListarUsuarios"
				}
			});
		}

		Usuario.find().exec(function (errorIndefinido, usuariosEncontrados) {
			if (errorIndefinido) {
				return res.view('vistas/Error', {
					error: {
						desripcion: "Hubo un error cargando los usuarios",
						rawError: errorIndefinido,
						url: "/ListarUsuarios"
					}
				});
			}
			res.view("vistas/Usuario/editarUsuario", {
				usuarios: usuariosEncontrados
			})
		})

	},


	editarMascota: function (req, res) {

		var parametros = req.allParams();

		if (req.method == 'POST') {
			if (parametros.nombre && parametros.paisNacimiento && parametros.idRaza) {

				Mascota.update({
					id: parametros.id
				}, {
					nombre: parametros.nombre,
					fechaNacimiento: parametros.fechaNacimiento,
					paisNacimiento: parametros.paisNacimiento,
					idRaza: parametros.idRaza,
				}).exec(function (error, mascotaCreado) {
					if (error) {
						return res.view('error', {
							title: 'Error',
							error: {
								descripcion: 'Hubo un error creando la mascota: ' + error,
								url: '/CrearUsuario'
							}
						});
					}


					Mascota.find().exec(function (error, mascotasEncontrados) {
						if (error) return res.serverError()
						return res.view('vistas/Mascota/listarMascotas', {
							title: 'Lista de Mascotas',
							mascotas: mascotasEncontrados,
							url: '/CrearUsuario'
						})
					});

				});

			} else {
				
				return res.view('error', {
					title: 'Error',
					error: {
						descripcion: 'No envia todos los parametros',
						url: '/editarMascota'
					}
				});
			}
		} else {
			
			return res.view('error', {
				title: 'Error',
				error: {
					descripcion: 'Falla en el metodo HTTP',
					url: '/editarMascota'
				}
			});
		}

	}

};