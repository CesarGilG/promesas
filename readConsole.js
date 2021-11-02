const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout);

function pregunta(pregunta) {
    return new Promise((resolve, reject) => {
        rl.question(pregunta, (parametro) => resolve(parametro) );
    });
}
function hacerPregunta (callback)
{
let persona = {name:"",surname:"",age:0}
pregunta("Nombre de la persona?")
.then((respuesta) => { persona.name = respuesta; return pregunta("Apellido de la persona?"); })
.then((respuesta) => { persona.surname = respuesta; return pregunta("Edad de la persona?"); })
.then(respuesta => 
    { persona.age = respuesta; 
    rl.close();
    callback(persona); })
// .catch(console.log("error"))
}
module.exports = {hacerPregunta}