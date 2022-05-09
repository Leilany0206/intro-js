/*Construye un código bajo las siguientes reglas
*Declara un arreglo vacío 
*Con un ciclo While que se ejecute 5 veces, agrega los elementos al array*/

var array = [];
var elementos;

while (array.length <= 5) {
    elementos = prompt("Agrega elementos al array")
    array.push (elementos)
    if (array.length == 5)
    break
}

console.log (array)

//Otra solución sin break

var array = [];
var elementos;

while (array.length <= 4) {
    elementos = prompt("Agrega elementos al array")
    array.push (elementos)
}

console.log (array)