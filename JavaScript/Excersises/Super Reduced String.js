// Super Reduced String (hackerrank)

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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    // Write your code here
    /*
    Si el valor de la posicion actual es igual al de la siguiente entonces 
    eliminamos esos valores del String (*substring) y damos de vueltas al String
    mientras cambie el recorrido (while) 
    */

// ------------------------- Brute Force --------------------- //    
/*    
    let i=0;
    while(i < s.length) {
        if(s[i] === s[i+1]){
            s = s.substring(0,i) + s.substring(i+2, s.length);
            i=0; 
        } else {
            i++;
        }
    }
    return (s.length > 0 ? s : 'Empty String');
*/ 
  

// ----------------------------- STACK! -------------------------- //
    const stack = [];
    for(let char of s) {
        if(stack.length === 0)
            stack.push(char);
        else if (stack[stack.length - 1] === char)
            stack.pop();
        else
            stack.push(char);
    }
    
    let result = '';
    for(let char of stack) {
        result += char;
    }
    return (result.length > 0 ? result : 'Empty String');
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}

