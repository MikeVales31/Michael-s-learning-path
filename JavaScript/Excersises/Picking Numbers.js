// Picking Numbers (hackerrank)

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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    
    let numbersArray = new Map();
    const unrepeatedNumbers = Array.from(new Set(a)).sort();
    let maxValueFinal = 1;
    
    for(let i=0; i<a.length; i++){
        numbersArray.set(a[i], numbersArray.get(a[i]))
        if(numbersArray.get(a[i]) === undefined){
            numbersArray.set(a[i],1);
        }
        else{
           numbersArray.set(a[i],numbersArray.get(a[i])+1);
            
        
            if(numbersArray.get(a[i]) > maxValueFinal){
                maxValueFinal = numbersArray.get(a[i]);
            }
        }
        
    }
        
    
    
    for(let j=0; j<unrepeatedNumbers.length; j++){
        if(Math.abs(unrepeatedNumbers[j]-unrepeatedNumbers[j+1])<=1){
           const maxValue = numbersArray.get(unrepeatedNumbers[j]) + numbersArray.get(unrepeatedNumbers[j+1]);
            if(maxValueFinal < maxValue){
                maxValueFinal = maxValue;
            }
        }
    }
    
    
    return maxValueFinal;

    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
