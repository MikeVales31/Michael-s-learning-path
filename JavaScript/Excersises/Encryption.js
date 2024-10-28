// Encryption

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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
    let condifyMessage = [];
    let finalMessage ="";
    const columns = Math.ceil(Math.sqrt(s.length));
    const rows = Math.floor(Math.sqrt(s.length));
    let word = "";
    let i=0;
    
    console.log("rows : " + rows);
    console.log("columns : " + columns);
    for(let i=0; i<s.length; i += columns){
        condifyMessage.push(s.substring(i,i+columns));
    }
    
    console.log(condifyMessage);
     
    for(let j=0; j<columns; j++){
        word = "";
        i=0;
        while(i<condifyMessage.length){
            if(condifyMessage[i][j] !== undefined){
                word += condifyMessage[i][j];
            }
            i++;
        }
        finalMessage += word + " ";
    }
        return finalMessage;        
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
