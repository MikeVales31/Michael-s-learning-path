/**
 * Arrays 
 */

let friends = ["Pedro", "Gabriel", "Erick", "Daniel"];


//Agregar elementos al array 
let data = friends.slice(0,2);

console.log(friends);
console.log(data);

//Foreach necesita como parametro una funcion 
friends.forEach(amigo => console.log(amigo));

//Filter
let numeros = [10,436,45,74,33,9,2,54];
let data1 = numeros.filter(num => num > 20);

console.log(data1);

//Find, includes, some, every

/**
 * Strings 
 */

//Slice
let text = "Alberto Junior Quiroga Muñoz";
let data2 =  text.slice(3,10);
console.log(data2);

//Split
 //Search

 /**
  * Objetos
  */

 let student = { 
    name: "beto",
    age: 21,
    suscription: false,
    city: "Lima"

 }
 let values = Object.keys(student);
 console.log(values);

 /**
  * Math y date
  */

 const valor = new Date();
 console.log(valor.getFullYear());