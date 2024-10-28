// Equalize the Array (hackerrank)

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
    // Write your code here
    let mapaArr = new Map();
    
    countNumbers(arr, mapaArr);
    const keyMasRepetida = maxRepeated(mapaArr);  
    
    return (arr.filter(v => v!== keyMasRepetida).reduce((acc,v) => acc + 1,0));
    
}

// Number
// String
// Boolean

// REFERENCE
// Object
// Array
// Map



function maxRepeated(mapaArr) {
    let valorMasRepetido = 0;
    let keyMasRepetida;
    for(let key of mapaArr.keys()){
        mapaArr.get(key);
        if(mapaArr.get(key)>valorMasRepetido){
            valorMasRepetido = mapaArr.get(key);
            keyMasRepetida = key;
        }
    }
    return keyMasRepetida;
}


function countNumbers(arr, numberCounter) {
    for(let repeated of arr){
        if(!numberCounter.get(repeated)){
            numberCounter.set(repeated,1);
        }
        else{
            numberCounter.set(repeated,numberCounter.get(repeated)+1);
        }  
    } 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = equalizeArray(arr);

    ws.write(result + '\n');

    ws.end();
}

