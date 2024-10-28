// Jumping on the Clouds: Revisited (hackerrank)

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    /*
    Tengo mi arreglo c, si caigo en 1 se restan 3 de energia,
    Si caigo en 0 se resta 1 de energia.
    
    Mientras no caiga en la misma posicion que empece continua (while)
    
    */
    
    
    let person1 = new Player(k);
    
    let e = 100;
    let i = 0;
    do{
        person1.position = (person1.position + k)%c.length;
    
        if(c[person1.position] === 0){
            person1.energy -= 1;
            person1.jump();    
            
        }
        else{
            person1.energy -= 3;
            person1.jump();    
        }
    }
    while(person1.position !== 0)
        
        return person1.energy;
    
    

}
function Player(jumpPower){
    let position = 0;
    this.energy = 100;
    this.position = position;
    this.jump = function jumping(){
        position += jumpPower;
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}

