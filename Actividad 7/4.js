/* Crea un programa, el cual sirva para convertir temperaturas. De Celsius a Fahrenheit y
viceversa. Utiliza las expresiones matemáticas necesarias para la conversión. Que dicho
programa reciba como argumentos las temperaturas y regresa el resultado
imprimiendo en pantalla la conversión. Tu solución es libre a la imaginación. */

var select = prompt("Escribe F sí deseas convertir Fahrenheit a Celsius, escribe C si deseas convertir Celsius a Fahrenheit")

function temp (number) {
    if (select.toUpperCase() == "F") {
        var far = (Number(number) - 32) * 0.5556
        return far 
    } else if (select.toUpperCase() == "C") {
        var cel = (Number(number) * 1.8) + 32;
        return cel
    }
}

temp (58)