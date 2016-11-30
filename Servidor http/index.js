var express = require('express')
var app = express()
var puerto=5050

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript')
})

app.listen(puerto, function () {
  console.log('Example app listening on port '+puerto+'!')
})

var puerto=6000

app.post('/TecnologiasWeb', function (req, res) {
  res.send('con POST')
})

app.listen(puerto, function () {
  console.log('Example app listening on port '+puerto+'!')
})