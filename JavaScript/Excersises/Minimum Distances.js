// Minimum Distances (hackerrank)

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
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    /**
     * Primero hacemos un mapa que indique que numeros se repiten.
     * Si ni uno se repite devuelvo -1.
     * Si se repite 
     */
    let map = new Map();
    let distanciaMin = 99999; 
    
    for(let i=0; i<a.length; i++){
        if(map.get(a[i]) === undefined){
            map.set(a[i],i);
        }
        else{
            const distancia = Math.abs(map.get(a[i])-i);
            if(distancia < distanciaMin){
                distanciaMin = distancia;
            }
        }
    }
    
    return (distanciaMin === 99999)? -1: distanciaMin;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}

