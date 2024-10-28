//Making Anagrams (hackerrank)

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
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(word1, word2) {
    // Write your code here
    let charsOfWord1 = countingChars(word1);
    let charsOfWord2 = countingChars(word2);
    let unrepeatedChars = Array.from(new Set (word1+word2));
    
    const completedChar1 = completedChars(unrepeatedChars,charsOfWord1);
    const completedChar2 = completedChars(unrepeatedChars,charsOfWord2);
    let count = 0;
    
    for (let key of completedChar1.keys()){
        count += Math.abs(completedChar1.get(key)-completedChar2.get(key));
    }
    return count;
}

function countingChars(word){
    const charsOfWord = new Map();
    
    for(let char of word){
        if(!charsOfWord.get(char)){
            charsOfWord.set(char,1);
        }
        else{
            charsOfWord.set(char,charsOfWord.get(char)+1);
        }
    }
    return charsOfWord;    
}

function completedChars(unrepeatedChars, charsOfWord){
    
    for(let char of unrepeatedChars){
        if(!charsOfWord.get(char)){
            charsOfWord.set(char,0);
        }
    }
    return charsOfWord;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = makingAnagrams(s1, s2);

    ws.write(result + '\n');

    ws.end();
}

