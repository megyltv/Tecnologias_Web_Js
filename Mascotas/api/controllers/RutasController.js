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
                if(UsuarioEncontrado){
                     return res.view("vistas/Usuario/editarUsuario",{
                         usuarioAEditar:UsuarioEncontrado
                     });
                }else{
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "El usuario con id: "+parametros.id+" no existe.",
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


	editarMascota: function(req,res){
		
	},
	
	crearRaza: function (req, res) {

		return res.view('vistas/Raza/crearRaza')

	},
	
	editarRaza: function(req,res){
		var parametros= req.allParams();
		
		if(parametros.id){
			Raza.findOne({
				id:parametros.id
			}).exec(function(err, RazaEncontrada){
				if(err){
					return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error Inesperado",
                            rawError: err,
                            url: "/ListarRazas"
                        }
                    });
				}
				if(RazaEncontrada){
					return res.view('vistas/Raza/editarRaza',{
						razaAEditar:RazaEncontrada
					});
				}else{
					return res.view('vistas/Error', {
                        error: {
                            desripcion: "La raza con id: "+parametros.id+" no existe.",
                            rawError: "No existe la raza",
                            url: "/ListarRazas"
                        }
                    });
				}
				
			})
			
		}else{
			return res.view('vistas/Error', {
                error: {
                    desripcion: "No ha enviado el parametro ID",
                    rawError: "Faltan Parametros",
                    url: "/ListarRazas"
                }
            });
		}
	},
	
	listarRazas:function(req,res){
		Raza.find().exec(function(err,razasEncontradas){
			if(err){
				return res.view('vistas/Error', {
						error: {
							descripcion: "Hubo un problema cargando las razas",
							rawError: err,
							url: "/ListarRazas"
						}
					}); 
			}
			res.view('vistas/Razas/listarRazas',{
				razas:razasEncontradas
			})
		})
	}

};