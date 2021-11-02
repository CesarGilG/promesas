const fs = require('fs')
function leerescribir(persona)
{
    fs.writeFile("persona.JSON",JSON.stringify(persona),()=>
    {
        fs.readFile("persona.JSON","utf8",(err,lectura)=>
            console.log(JSON.parse(lectura)))
    })
}
module.exports = {leerescribir}