//Plus minus (hackerrank)

'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positive=0;
    let negative=0;
    let zero = 0;
    
    let n = arr.length;
    let resultado = 0;
    
    for(let i=0;i<arr.length;i++){
        resultado = arr[i]/n;
        if(resultado>0){
            positive++
        }
        else if(resultado<0){
            negative++
        }
        else {
            zero++
        }
       
    }
        console.log(Number(positive/n).toPrecision(6));
        console.log(Number(negative/n).toPrecision(6));
        console.log(Number(zero/n).toPrecision(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
