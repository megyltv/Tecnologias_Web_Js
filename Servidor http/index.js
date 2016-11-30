var express = require('express');
var app = express();
var puerto = 5050;

var usuarios = [
    {
        id: 1,
        nombre: 'Pepe',
        cedula: 123456789
    }, {
        id: 2,
        nombre: 'Carlos',
        cedula: 789456123
    }, {
        id: 3,
        nombre: 'Juan',
        cedula: 456789123
    }
];
var contador=3;

app.get('/', function (req, res) {
    res.send('Hello World!')
})

//------------------ Buscar todos
app.get('/Usuario', function (req, res) {

    res.json(usuarios);

})

//------------------ Buscar uno
app.get('/Usuario/:idUsuario', function (req, res) {
    var idActual = req.params.idUsuario; //guardar parametros 
    //Buscando en todo el arreglo
    for (var i = 0; i < usuarios.length; i++) {
        if (idActual == usuarios[i].id) {
            //responder al usuario
            res.json(usuarios[i]);
        }
    }
    //Si no lo encuentra responda que no existe
    res.send('No existe usuario');
})

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})

puerto = 6000;

app.post('/TecnologiasWeb', function (req, res) {
    //    

    var parametros = req.params;
    console.log(parametros);

    var usuario = {
        nombre: 'Megan',
        cedula: '0000000000'
    }

    res.append('Token', '1234');
    res.append('Usuario', usuario.nombre);

    res.json(usuario);

    console.log(res.headers);
    //res.send('con POST')

})

app.post('/Usuario', function (req, res) {
    //------------------------ Crear
    console.log(req.query.nombre);

    if (!req.query.nombre) {
        res.send('No envio el nombre');
    }
    if (!req.query.cedula) {
        res.send('No envio la cedula');
    }
    
    var nuevoUsuario={
        id:contador+1,
        nombre: req.query.nombre,
        cedula:req.query.cedula
    }
    
    usuarios.push(nuevoUsuario);
    contador=contador++;
    res.json(nuevoUsuario);
    
    
})

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})