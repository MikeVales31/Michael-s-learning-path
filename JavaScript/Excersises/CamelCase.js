// CamelCase (hackerrank)

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
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
    // Write your code here
    let words = 1;
    
    for(let char of s){
        let charUpperCase = char.toUpperCase();
        console.log(charUpperCase);
        if(char === charUpperCase){
            words++;
        }
    }
    
/*
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    for(let i=0; i<s.length; i++){
        for(let j=0; j<upperCase.length;j++){
            if(s[i]=== upperCase[j]){
                words++
            }
        }
    }
    
    */
    return words;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = camelcase(s);

    ws.write(result + '\n');

    ws.end();
}

