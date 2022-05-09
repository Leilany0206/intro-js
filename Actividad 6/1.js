/*1. Concatena los siguientes arreglos:
    var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'] 
    var comingSoonAnimals = ['panter', 'dragon', 'turtle']*/

var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];

var zoo = animals.concat (comingSoonAnimals);
console.log (zoo)

//2. Acomoda el arreglo de menor a mayor: var arr = [ 4, 6, 1, 0, 8, 2]

var arr = [ 4, 6, 1, 0, 8, 2];
arr.sort();

//3. Agrega un nuevo animal ('cow') al arreglo de animals

animals.push ("cow")
console.log (animals)

//4. Retira el elemento 'eagle' del arreglo animals*/

animals.shift()
console.log (animals)