/* 6. -Con ayuda de la función prompt pedir dos datos al usuario: Nombre, edad
Para luego imprimir en pantalla el siguiente resultado.
-Si el usuario tiene edad de 18 o mayor puede ingresarala discoteca.
-Si el usuario es menor de 18 no puede ingresarala discoteca.
-Si el usuario se llama Mario o Carlos puede ingresar a VIP. */

var edad = prompt ("Introduce tu edad")
var nombre = prompt ("Introduce tu nombre")

if (edad < 18) {
    console.log ("No puedes ingresar a la discoteca")
    } else if (edad >= 18 && nombre == "Mario" || nombre == "Carlos") {
        console.log ("Puedes ingresar a la discoteca como VIP")
    } else if (edad > 18) {
        console.log ("Puedes ingresar a la discoteca")
    }