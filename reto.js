// console.log("Mensaje 1")



// setTimeout(function() {
//     console.log("Mensaje 2")
//     console.log("Mensaje 3")
// }, 3000);



// let Persona = {
//     "nombre": "Oscar",
//     "apellido": "Martinez",
//     "Edad": 18

// }
// let objeto = JSON.stringify(Persona)
let fs = require("fs")
// fs.writeFileSync("./archivo.json", objeto)
// fs.readFile("./archivo.json", "utf-8", (err, archivo)=>{
//     if(err)
//     {console.log("Error al leer el archivo");}
//     else {console.log(archivo);}
// })





let Persona = {
    "nombre": "",
    "apellido": "",
    "Edad":""

}

const { fstat } = require("fs");
let readline = require("readline")
let rl = readline.createInterface(process.stdin, process.stdout);

rl.question("¿Cómo te llamas?", (respuesta) => {
    Persona.nombre = respuesta;
    rl.question("¿Cuál es tu apellido?", (respuesta2) => {
        Persona.apellido = respuesta2;
        rl.question("¿Qué edad tienes?", (respuesta3)=>{
            Persona.Edad = respuesta3
           console.log(Persona);
           
           var objeto = JSON.stringify(Persona);
           fs.writeFileSync("./escribo.JSON", objeto)
           fs.readFileSync("./escribo.JSON", "utf-8")

           process.exit();

        })

    })
})

