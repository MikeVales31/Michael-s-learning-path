//Game of Thrones - I (hackerrank)

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
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(word) {
    // Write your code here
    const numberOfChars = charsOfWord(word);
    let count = 0;
    let countOdds = 0;
    
    for(let value of numberOfChars.values()){
        if(value === 1){
            count++;
            countOdds++;
        }
        else if(value%2 !== 0){
            countOdds++;
        }
    }
    if(count >1){
        return "NO";
    }
    else if(countOdds>1){
        return "NO"
    }
    else{
        return "YES"
    }
}

function charsOfWord (word){
    const charsOfWord = new Map();
    
    for(let char of word){
        if(!charsOfWord.get(char)){
            charsOfWord.set(char,1)
        }
        else{
            charsOfWord.set(char,charsOfWord.get(char)+1);
        }
    }
    return charsOfWord;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = gameOfThrones(s);

    ws.write(result + '\n');

    ws.end();
}

