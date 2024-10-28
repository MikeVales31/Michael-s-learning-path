//Two Characters (hackerrank)

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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // Write your code here
    let charsToRemove = repeatedCharOnWord(s);
    
    while(charsToRemove.length > 0){
       s = cleanRepeatedChars(s, charsToRemove);
       charsToRemove = repeatedCharOnWord(s);
   } 
   
   if(s.length < 2){
       return 0;
   }
   
   let chars = unrepeatedChars(s);
   let max = 0;
   
   for(let i = 0; i < chars.length - 1; i++){
       let j = i + 1;
       while (j < chars.length) {
           let removeTest = [...chars];
           removeTest.splice(j,1);
           removeTest.splice(i,1);
           let str = s;
            while(removeTest.length > 0){
                str = cleanRepeatedChars(str, removeTest);
                removeTest = repeatedCharOnWord(s);
            }
            if(!(repeatedCharOnWord(str).length > 0) && max < str.length){
                max = str.length;
            } 
            j++;
       }
   }
   return max;
}

function unrepeatedChars(word){
    let unrepeatedWord = Array.from(new Set(word));
    
    return unrepeatedWord;
}

function cleanRepeatedChars(word, charsToRemove){
    let cleanedWord = "";
    for(let letter of word) {
        if(!charsToRemove.includes(letter)) {
            cleanedWord += letter;
        }
    }
    return cleanedWord;
}

function repeatedCharOnWord(word){
    let i=0;
    let repeatedChar = [];
    
    while(i<word.length){
        if(word[i] === word[i+1] && !repeatedChar.includes(word[i])){
            repeatedChar.push(word[i]);
        }
        i++;
    }
    return repeatedChar;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}

