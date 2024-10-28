// Time Conversion (hackerrank)

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const horasString = s.substring(0,2);
    let horas = Number(horasString);
    let indiceFin = 2;
    let nuevoString = 0;

    
    if (s[8] == "P" ){
        if(horasString !== "12"){
        
        horas += 12;
        nuevoString = horasString + horas + s.substring(indiceFin)
        s = nuevoString.substring(2,10)
        
        return s;                   
        }
        
        else{
        s = s.substring(0,8)
        return s;
        } 
    }
    
    else if (s[8] == "A"){
        if(s[0]==1 && s[1]==2){
        s=`00` + s.substring(2,8);
            return s 
        }
        else{
            s = s.substring(0,8);
            return s 
        }
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

