/**
 * Splice
 * Add or eliminate an element of the array, changing the original array.
 */

arreglo = [0,1,2,3,4,5,6,7,8,9];

/**
 * In the position 1 were add or eliminate  ".splice(2)"
 * In the position 2 number of elements that will delete ".splice(2,2)"
 * The rest is the quantity of items that will add ".splice(2,2,"Mango", "Kiwi")"
*/
arreglo.splice(3,2);

console.log(arreglo);