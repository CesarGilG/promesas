const { rejects } = require('assert');
const fs = require('fs')
const pregunta = require('./readConsole')
const rw = require("./writeReadObject")


pregunta.hacerPregunta(persona => rw.leerescribir(persona))
