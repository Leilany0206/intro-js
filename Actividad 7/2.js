/* Mediante una función,y dado un arreglo de enteros var numbers=[1, 2, 3, 4, 10, 11 ],
encuentra la suma de sus elementos */

var numbers = [1, 2, 3, 4, 10, 11]
var add = 0

var addition = function (numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var item = numbers[i]    
        add += numbers[i]
    }
    return add
}

var result = addition (numbers)
console.log(result)