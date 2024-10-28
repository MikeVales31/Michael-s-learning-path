// Viral Advertising (hackerrank)

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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    let likes = Math.floor(5/2);
    let arrLikes = [];
    let i=2;
    let cumulative = 0;
    
    arrLikes.push(2);
    while(i<=n){
        likes =  Math.floor((likes * 3)/2);
        arrLikes.push(likes);
        i++;
    }
    
    for(let j=0; j<arrLikes.length; j++){
        cumulative = cumulative + arrLikes[j];
    }
    return cumulative;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}

