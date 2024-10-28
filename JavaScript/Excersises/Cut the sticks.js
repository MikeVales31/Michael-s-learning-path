// Cut the sticks (hackerrank)

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
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here
    /*
    
    */
    let count = 0;
    let valorMin = 999;
    let result = [];
    
    do{
        valorMin = 999;
        for(let j=0; j<arr.length; j++){
            if(arr[j]< valorMin  && arr[j]!==0){
                valorMin = arr[j];
            }
        }
        
        count = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i] !== 0){
                arr[i] = arr[i] - valorMin;
                count++;
            }
        }
        if(count>0){
           result.push(count)    
        }
        
    
    }while(count!== 0)
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = cutTheSticks(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

