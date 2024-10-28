//Gemstones (hackerrank)

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
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    // Write your code here
    let result = [];
   
    for(let i=0; i<arr.length; i++){
       result.push(numberOfChars(allChars(arr),arr[i])); 
    }
    
    return comparingNumbers(result);
}
   
function allChars(arr){
    let suma = "";
    
    for(let i=0; i<arr.length; i++){
        suma += arr[i];
    }
    let unrepeatedChars = Array.from(new Set(suma));
    return unrepeatedChars;
}

function numberOfChars(unrepeatedChars, word){
    let i=0;
    let result =[];
    let count = 0;
    
    while(i<unrepeatedChars.length){
        for(let j=0; j<word.length; j++){
            if(unrepeatedChars[i] === word[j]){
                count++;
            }
        }
        result.push(count);
        i++;
        count = 0;
    }
    return result;
}

function comparingNumbers(arregloDeArreglos){
    let i=0;
    let j=0;
    let suma = 0;
    
     while(j<arregloDeArreglos[0].length){
        let valorMinimo = 9999;
        while(i<arregloDeArreglos.length){
            if(valorMinimo > arregloDeArreglos[i][j]){
                valorMinimo = arregloDeArreglos[i][j];
            }
            i++
        }
        suma += valorMinimo;
        j++
        i=0;
    }
    
    return suma;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    const result = gemstones(arr);

    ws.write(result + '\n');

    ws.end();
}

