// Mini-Max Sum (hackerrank)

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sumaMin=0;
    let sumaMax=0;
    let suma = 0;
    let max = arr[0];
    let min = arr[0];
    
    for (let i=0; i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
        else if(min>arr[i]){
            min = arr[i];
        }
        
        suma += arr[i]
    }
    
    sumaMin = suma - max
    sumaMax = suma - min
    
    console.log(sumaMin+" "+sumaMax)
}



function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
