// Diagonal difference (hackerrank)

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    /**
     * izquierdaDerecha = [0,0][1,1][2,2]
     * derechaIzquierda = [0,2][1,1][2,0]
     */
let izquierdaDerecha = 0;
let derechaIzquierda= 0;
let resultado =0;
for (let i=0;i<arr.length;i++){
    izquierdaDerecha += arr[i][i]
    derechaIzquierda += arr[i][(arr.length-1)-i]
}
resultado = Math.abs(izquierdaDerecha-derechaIzquierda)
return resultado
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
