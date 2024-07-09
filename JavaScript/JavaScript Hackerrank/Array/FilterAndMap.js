/*
Filter 
helps to filter. Recieves the parameter of the array, value or index.
array.filter(v,i,arr) , it can make an arrow function.
*/
//Excersise 1
let sticks = [10,20,45,31,22];
sticks = sticks.filter(v => v > 21);

console.log(sticks);

//Excersise 2
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
alphabet = alphabet.filter((v,i) => (i > 4))
console.log(alphabet);

/*
Map

array.map(function (value){ 
    return value -1 })

    or arrowfunction array.map(value => value-1)
*/

// Excersise 1 
let array = [50,10,30,54,64,77,10];
array = array.map(v => v - 10);
console.log(array);

//Excersise 2 
let numbers = [9,16,25,36,49];
numbers = numbers.map(v => Math.sqrt(v));
console.log(numbers);

//Ejercicio 3
let matrix = [[2,3],[1,7],[8,4],[9,2]];
matrix = matrix.map(v => v[0]*v[1]);
console.log(matrix);



