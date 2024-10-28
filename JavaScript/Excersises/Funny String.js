//Funny String (hackerrank)

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
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(word) {
    // Write your code here
    let reverseWord = [];
    for(let i=word.length-1; i>=0; i--){
        reverseWord.push(word[i]);
    }
    
    const absoluteDifferences = differeceBetweenElements(wordToNumber(word));
    const reverseAbsoluteDifferences = differeceBetweenElements(wordToNumber(reverseWord));
    
    return comparison(absoluteDifferences, reverseAbsoluteDifferences);
    
    
}

function wordToNumber(word){
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let values = [];
    let asciiValues = [];
    let i=0;
    let j=0;
    
    for(let i=97; i<123; i++){
        values.push(i);
    }
    while(i<word.length){
        if(word[i] === alphabet[j]){
            asciiValues.push(values[j]);
            i++;
            j=0;
        }
        else{
            j++;
        }
    }
    return asciiValues;
}

function differeceBetweenElements(array){
    let result =[];
    
    for(let i=0; i<array.length; i++){
        result.push(Math.abs(array[i]-array[i+1]))
    }
    
    return result;
}
function comparison(array1,array2){
    let count =0;
    for(let i=0; i<array1.length;i++){
        if(array1[i] === array2[i]){
            count++;
        }
    }
    
    return (count === array1.length-1) ? "Funny" : "Not Funny";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}

