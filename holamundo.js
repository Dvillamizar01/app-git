const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
res.send('Hola Mundo!'));

holamundo.get('/sumar/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const resultado = num1 + num2;
  res.send(`El resultado de la suma es: ${resultado}`);
})
module.exports = holamundo;
