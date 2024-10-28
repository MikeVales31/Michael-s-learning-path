//Palindrome Index (hackerrank)

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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(word) {
    // Write your code her
    
    let reversWord = reverseStr(word);
    
    if(reversWord === word){
        return -1;
    }
    
    else{
        for(let i=0; i<word.length;i++){
            if(word[i] !== word[word.length -1 - i]){
                let palindrome = word.substring(0,i) + word.substring(i+1,word.length);
                console.log('palindrome : ' + palindrome);
                let reversedPal = reverseStr(palindrome);
                if(reversedPal === palindrome){                    
                    return i;
                }
                else {
                    return word.length-i-1;
                }
            }
        }    
    }
}

function reverseStr(word) {
    let reversWord ="";
    
    for(let i=word.length-1; i>=0; i--){
        reversWord += word[i];
    }
    return reversWord;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}

