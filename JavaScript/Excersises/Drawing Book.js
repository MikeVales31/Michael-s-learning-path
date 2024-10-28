// Drawing Book (hackerrank)

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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here

function Book(){
    let rightP = 1;
    let leftP =0;   
    let count = 0;
    let rRightP = (n%2 === 0)? n+1:n;
    let rLeftP = (n%2 === 0)? n:n-1;
    let rCount = 0;
                

    this.countNormal = function(){        
        while(!(rightP === p || leftP === p)){
            rightP +=2;
            leftP += 2;
            count++;
        }
    }
    this.countReverse = function(){
        while(!(rRightP === p || rLeftP === p)){
            rRightP -=2;
            rLeftP -= 2;
            rCount++;
        }
    }
    
    Object.defineProperty(this,"minimumCount",{
        get: function(){return Math.min(count,rCount) }
    })
}
    
    const book = new Book();
    book.countNormal();
    book.countReverse();
    return book.minimumCount;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}

