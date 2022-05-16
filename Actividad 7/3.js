/*Desarrolla un método para verificar si una palabra es un palíndromo. Casos de prueba:
var word1='madam' var word2='computadora'  */

function pali (word) {
    var rev = word.split("").reverse().join("")
    if (word == rev) {
        return "Es un palíndromo"
    } else {
        return "No es un palíndromo"
    }
}

pali ("madam")