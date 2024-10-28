// Correctness and the Loop Invariant (hackerrank)

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

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const arCount = parseInt(readLine().trim(), 10);
    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
    const result = insertionSort(ar);
    ws.write(result + '\n');
    ws.end();
}

function insertionSort (ar) {
  
for(let i = 1; i < ar.length; i++){
    var value = ar[i];
    var j = i - 1;
    while(j >= 0 && ar[j] > value){
      ar[j + 1] = ar[j];
      j = j - 1;
      
    }
    ar[j + 1] = value;
  }
    
  return ar.join(" ");
  
}



