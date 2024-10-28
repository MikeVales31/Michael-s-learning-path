// Forming a Magic Square (hackerrank)

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
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */


function formingMagicSquare(s){
    //Magic squares
    const mS1 = [8,3,4,1,5,9,6,7,2];
    const mS2 = [6,7,2,1,5,9,8,3,4];
    const mS3 = [2,7,6,9,5,1,4,3,8];
    const mS4 = [4,3,8,9,5,1,2,7,6];
    const mS5 = [4,9,2,3,5,7,8,1,6];
    const mS6 = [8,1,6,3,5,7,4,9,2];
    const mS7 = [6,1,8,7,5,3,2,9,4];
    const mS8 = [2,9,4,7,5,3,6,1,8];
    const msArr = [mS1,mS2,mS3,mS4,mS5,mS6,mS7,mS8]; 
    
    s = s.flat();
    console.log(s)
    //Sum
    
    //Final result
    let minAcc = 9999;
    
    for(let mS of msArr){
        let acc = 0;
        for(let i=0; i<mS.length; i++){
            acc += Math.abs(mS[i] - s[i]);
        }
        if(minAcc > acc) {
            minAcc = acc;
        }
    }

    return minAcc;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    console.log(result)
    
    ws.write(result + '\n');

    ws.end();
}
