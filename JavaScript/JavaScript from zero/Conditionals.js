/**
 *Conditionals
 */

/**
 * Invitation to a party
 * 
 * if you are an adult and have less than 65 you can come to my party
 * else if you have permission of your parents, you can come 
 * else stay in your house.
 */
let person = "Juan Alexis";
let age = 16;
let permission = true;

if (age >= 18 && age < 65){
    console.log(`${person} can come to the party`);
}

else if (permission === true && age < 18) {
    console.log(`you can come if you have permission of your parents`);
}

else {
    console.log(`Please stay in your house ${person}`);
}

/**
 * Multiple conditionals
 */

/**
 * What character of Dragon Ball you are
 * 
 * if you are strong and glutton you are Goku.
 * if you are fast and selfish you are Vegeta.
 * if you are small and weak you are Krilin.
 * if you are mischievous and playful you are Trunks
 * else you are a vermin
 */

let personality = "Strong and glutton";

switch(personality){
    case "Strong and glutton": console.log("You are Goku");
    break
    case "Fast and selfish": console.log("You are Vegeta");
    break
    case "Small and weak": console.log ("You are Krilin");
    break
    case "Mischievous and playful": console.log("You are Trunks");
    break
    default: console.log("You are a vermin");
}

/**
 * Cycles 
 * Loops 
 */

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
}

//If we want to print a text letter for letter

let texto = "betoquiroga"

for(let n = 0; n < texto.length; n++){
    console.log(texto[n]);
}

//while
let toys = 10;

while (toys > 0){
    toys--;
    console.log(`We give you a toy. Now we have ${juguetes}`);
    
}