// The Time in Words (hackerrank)

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
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(hour, min) {
    // Write your code here
    let hours = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
    
    let minutes = ["o' clock","one","two","three","four","five", "six", "seven", "eigth", "nine", "ten", "eleven", "tweleve", "thirteen", "fourteen", "quarter","sixteen","seventeen","eighteen","nineteen", "twenty","twenty one","twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half","twenty nine", "twenty eight", "twenty seven", "twenty six","twenty five", "twenty four", "twenty three", "twenty two", "twenty one", "twenty","nineteen", "eighteen","seventeen", "sixteen", "quarter","fourteen", "thirteen", "twelve", "eleven", "ten", "nine", "eight", "seven", "six","five", "four","three", "two", "one" ];
    
    if(min == 0){
        return hours[hour-1] + " " + minutes[0];
    }
    if(min == 1){
        return minutes[min]+ " minute past " + hours[hour-1];
    }
    if(min == 15){
        return minutes[min]+  " past " + hours[hour-1];
    }
    if(min > 1 && min < 30 && min !== 15){
        return minutes[min]+ " minutes past " + hours[hour-1];
    }
    if(min == 30){
        return minutes[min] + " past " + hours[hour-1];
    }
    if(min > 30 && min < 59 && min !== 45){
        return minutes[min] + " minutes to " + hours[hour];
    }
    if(min == 45){
        return minutes[min] + " to " + hours[hour];
    }
    if(min == 59){
        return minutes[min] + " minute to " + hours[hour];
    }
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine().trim(), 10);

    const m = parseInt(readLine().trim(), 10);

    const result = timeInWords(h, m);

    ws.write(result + '\n');

    ws.end();
}

