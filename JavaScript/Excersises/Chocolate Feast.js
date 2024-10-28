//Chocolate Feast (hackerrank)

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
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(dinero, precioBarraChocolate, envolturasCambio ) {
    // Write your code here
    /**
     * 1) Divido el (dinero/ precioBarraChocolate) para sacar las barras de chocolate.
     * 2) Cambio las envolturas (envolturas/envolturasCambio) para barras de chocolate.
     * 
     */
    let barrasDeChocolate = Math.floor(dinero/precioBarraChocolate);
    let envolturas = barrasDeChocolate;
    let chocolatesTotales = barrasDeChocolate;
    
    while(barrasDeChocolate > 0){
        barrasDeChocolate = Math.floor(envolturas/envolturasCambio);
        chocolatesTotales += barrasDeChocolate;  
        envolturas = envolturas%envolturasCambio + barrasDeChocolate;
    }
    return chocolatesTotales;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const c = parseInt(firstMultipleInput[1], 10);

        const m = parseInt(firstMultipleInput[2], 10);

        const result = chocolateFeast(n, c, m);

        ws.write(result + '\n');
    }

    ws.end();
}

