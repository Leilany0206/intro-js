var num = prompt ("Introduce un número random");
var num2 = prompt ("Introduce otro número random");
var num3 = prompt ("Introduce un último número random");
if ( Number(num) > Number(num2) && Number(num) > Number(num3) ) {
    console.log (num + " es mayor que " + num2 + " y " + num3)
    } else if ( Number(num2) > Number(num) && Number(num2) > Number(num3) ) {
        console.log (num2 + " es mayor que " + num + " y " + num3)
    } else if ( Number(num3) > Number(num) && Number(num3) > Number(num2) ) {
        console.log (num3 + " es mayor que " + num + " y " + num2)
/*1 y 2 iguales y mayores que 3*/
    } else if ( Number(num) === Number(num2) && Number(num) > Number(num3) ) {
        console.log (num + " es mayor que " + num3)
/*1 y 3 iguales y mayores que 2*/
    } else if ( Number(num) === Number(num3) && Number(num) > Number(num2) ) {
        console.log (num + " es mayor que " + num3)
/*2 y 3 iguales y mayores que 1*/
    } else if ( Number(num2) === Number(num3) && Number(num2) > Number(num) ) {
        console.log (num2 + " es mayor que " + num)
/*1 y 2 iguales y menores que 3*/
    } else if ( Number(num) === Number(num2) && Number(num) < Number(num3) ) {
        console.log (num + " es menor que " + num3)  
/*1 y 3 iguales y menores que 2*/
    } else if ( Number(num) === Number(num3) && Number(num) < Number(num2) ) {
        console.log (num + " es menor que " + num2)
/*2 y 3 iguales y menores que 1*/
    } else if ( Number(num2) === Number(num3) && Number(num2) < Number(num) ) {
        console.log (num2 + " es menor que " + num)   
/*Todos son iguales*/
    } else if ( Number(num) === Number(num2) && Number(num) === Number(num3) ) {
        console.log ("Todos los números son iguales y equivalen a " + num)   
    }