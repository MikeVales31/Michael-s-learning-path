/**
 * Functions
 */

//Statements of a function
function greetings(name){
    
    if(typeof name === "string"){
        console.log(`Hi ${name}, good morning`);
    }   
    else{
        console.log("Write correnctly your name");
    }
}

greetings(12);

//Calling a function

function completeName(name, lastName){
    let completeName = `${name} ${lastName}`;

    return completeName;
}
console.log(completeName("beto", "quiroga"));

 //Anonymous function
 let sum = function(a,b,c){
    return a + b + c;

 }

 let result = sum(2,4,5);
 console.log(result);

 /**
  * constant functions
  */


 let greeting1 = function (name){
    console.log(`Hi ${name}`);
}
console.log(greeting1("We"));

/**
 * Scope
 * 
 * It is important the scope of a function 
 * try to not use the global scope.
 */

/**
 * Arrow function
 */

const sum1 = (a,b) => a + b;

const substract = (c,d) => c - d;

console.log(sum1(71,3));
console.log(substract(10,4));