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
				Raza.find().exec(function (err, razasEncontradas) {
					if (err) {
						res.view('vistas/Error', {
							error: {
								desripcion: "Hubo un problema cargando los Usuarios",
								rawError: err,
								url: "/ListarRazas"
							}
						});
					}
					res.view('vistas/Raza/ListarRazas', {
						razas: razasEncontradas
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

	},

	editarRaza: function (req, res) {
		var parametros = req.allParams();

        if (parametros.idRaza && (parametros.nombre)) {
            
            var razaAEditar = {
                nombre: parametros.nombre
            }

            if (razaAEditar.nombre == "") {
                delete razaAEditar.nombre
			}

            Raza.update({
                    id: parametros.idRaza
                }, razaAEditar)
                .exec(function (errorInesperado, RazaRemovido) {
                    if (errorInesperado) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Tuvimos un Error Inesperado",
                                rawError: errorInesperado,
                                url: "/ListarRazas"
                            }
                        });
                    }
                
                    Raza.find()
                        .exec(function (errorIndefinido, razasEncontrados) {

                            if (errorIndefinido) {
                                res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Hubo un problema cargando los Usuarios",
                                        rawError: errorIndefinido,
                                        url: "/ListarRazas"
                                    }
                                });
                            }

                            res.view('vistas/Raza/ListarRazas', {
                                razas: razasEncontrados
                            });
                        })

                })
            
            
            
            
            

        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos que envies el ID y el nombre, apellido o correo",
                    rawError: "No envia Parametros",
                    url: "/ListarRazas"
                }
            });
        }
	}



};