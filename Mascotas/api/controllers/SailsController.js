/**
 * SailsController
 *
 * @description :: Server-side logic for managing Sails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var nodemailer = require('nodemailer'); //Instalar npm install 

module.exports = {
	hola: function (req, res) {

		var parametros=req.allParams();
		
		if (req.method == 'GET') {
			res.json({
				nombre: 'Hola GET',
				para:parametros
			});
		} else
		if (req.method == 'POST') {
			res.json({
				nombre: 'Hola POST'
			});
		} else {
			res.json({
				nombre: 'Hola a todos'
			})


		}
	},
	adios: function (req, res) {
		res.send('Adios');
	},
	hora: function (req, res) {
		res.send('Hora');
	},

};