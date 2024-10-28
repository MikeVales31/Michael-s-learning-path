// Pangrams (hackerrank)

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(word) {
    // Write your code here
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let count = 0;
    
    let wordLowerCase = word.toLowerCase();
    let unrepeatedWordSet = new Set(wordLowerCase);
    let unrepeatedWord = Array.from(unrepeatedWordSet);
    
    for(let key  of unrepeatedWord){
        for(let char of alphabet){
            if(key === char){
                count++
            }
        }
    }
    
    return (count === 26)? "pangram": "not pangram";
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}

