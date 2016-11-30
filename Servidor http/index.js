var express = require('express')
var app = express()
var puerto = 5050

app.get('/TecnologiasWeb', function (req, res) {
    res.send('con javascript')
})

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})

puerto=6000;

app.post('/TecnologiasWeb', function (req, res) {
    var usuario={
        nombre: 'Megan',
        cedula:'0000000000'
    }
    
    usuario.apellido='Toinga';
    usuario.mascotas=['Max', 'Misty', 'Dash'];
    
    console.log("HEADERS");
    console.log("Lo que tengo en el request es: ");
    console.log(req.headers);
    console.log("Lo que tengo en el request es: ");
    
    res.append('Token','1234');
    res.append('Usuario',usuario.nombre);
    
    
    
    
    res.json(usuario);
    
    console.log(res.headers);
    //res.send('con POST')
    
    

})

app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})