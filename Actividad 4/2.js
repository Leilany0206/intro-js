/*sando while, crea un programa que pregunte al usuario un número. Mostrar los
números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.*/

var limite = prompt("Ingresa un número");
var num = 0;

while (num < limite) {
    console.log (num)
    num = num + 5;
    if (num > limite) break
}