//Anagram (hackerrank)

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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Variables
    let count =0;
    let word1 = s.substring(0,s.length/2);
    let word2 = s.substring(s.length/2,s.length);
    
    //Functions
    let mapWord1 = makingMaps(word1);
    let mapWord2 = makingMaps(word2);
    let finalCount = comparison(s,mapWord1,mapWord2,count);
    
    //Results
    if(s.length%2 !== 0){
        return -1;
    }
    
    return finalCount;
    
}

function makingMaps(word1){    
    const mapWord1 = new Map();
    
        for(let i=0; i<word1.length; i++){
            if(!mapWord1.get(word1[i])){
                mapWord1.set(word1[i],1);    
            }
            else{
                mapWord1.set(word1[i],mapWord1.get(word1[i])+1);    
            }
        }
            return mapWord1;
}

function comparison(s,mapWord1,mapWord2,count){
    let wordSet = new Set(s);
    let wordArray = Array.from(wordSet);
    
    for(let char of wordArray){
        if(!mapWord1.get(char)){
            mapWord1.set(char,0);
        }
        if(!mapWord2.get(char)){
            mapWord2.set(char,0);
        }
        
        if(mapWord1.get(char)-mapWord2.get(char) > 0){
            count += mapWord1.get(char)-mapWord2.get(char);
        }
    }
    return count;
} 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}
