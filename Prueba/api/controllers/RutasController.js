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
	crearMateria: function (req, res) {

		return res.view('vistas/Materia/crearMateria')

	},
	
	listarMaterias:function(req,res){
		Materia.find()
			.exec(function (errorIndefinido, materiasEncontradas) {

				if (errorIndefinido) {
					return res.view('vistas/Error', {
						error: {
							descripcion: "Hubo un problema listando las materias",
							rawError: errorIndefinido,
							url: "/ListarMaterias"
						}
					});
				}

				res.view('vistas/Materia/listarMaterias', {
					materias: materiasEncontradas
				})

			})
	},
	
	editarMateria: function(req,res){
	
		var parametros = req.allParams();

		if (parametros.id) {

			Materia.findOne({
				id: parametros.id
			}).exec(function (errorInesperado, MateriaEncontrada) {
				if (errorInesperado) {
					return res.view('vistas/Error', {
						error: {
							desripcion: "Error Inesperado",
							rawError: errorInesperado,
							url: "/ListarMaterias"
						}
					});
				}
				if (MateriaEncontrada) {
					return res.view("vistas/Materia/editarMateria", {
						materiaAEditar: MateriaEncontrada,
						
					});
				} else {
					return res.view('vistas/Error', {
						error: {
							desripcion: "La materia con id: " + parametros.id + " no existe.",
							rawError: "No existe la materia",
							url: "/ListarMaterias"
						}
					});
				}
			})
		} else {

			return res.view('vistas/Error', {
				error: {
					desripcion: "No ha enviado el parametro ID",
					rawError: "Faltan Parametros",
					url: "/ListarMaterias"
				}
			});

		}
	},
	
	
	crearGrupo: function (req, res) {

		return res.view('vistas/Grupo/crearGrupo')

	},
	
	listarGrupos:function(req,res){
		var parametros = req.allParams();
		Grupo.find({
				id: parametros.id
			})
			.exec(function (errorIndefinido, gruposEncontrados) {

				if (errorIndefinido) {
					return res.view('vistas/Error', {
						error: {
							descripcion: "Hubo un problema listando los grupos",
							rawError: errorIndefinido,
							url: "/ListarGrupos"
						}
					});
				}

				res.view('vistas/Grupo/listarGrupos', {
					grupos: gruposEncontrados
				})

			})
	},
	
	editarGrupo: function (req,res){
		
	},
	
	error: function(req,res){
		return res.view('vistas/Error', {
			error: {
				descripcion: "Usted esta por error en esta Ruta, dirijase a Inicio",
				rawError: "Ruta equivocada",
				url: "/Inicio"
			}
		})
	}
	
};

