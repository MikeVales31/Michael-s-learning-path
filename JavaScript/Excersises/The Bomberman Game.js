//The Bomberman Game (hackerrank)

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
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function bomberMan(n, r, c, grid) {
    // Write your code her
    let i=1;
    
    if(n === 1){
        return grid;
    }
    if(n%2 === 0){
        return llenarBombas(r,c).map(row => row.join(''));
    }
    
    let gridBeforeExplosion = llenarBombas(r,c);
    explotarBombas(gridBeforeExplosion,grid,r,c);
    
    if((n - 3) % 4 === 0){
        return gridBeforeExplosion.map(row => row.join(''));;
    }
    
    grid = [...gridBeforeExplosion];
    console.log("grid : " + grid);
    gridBeforeExplosion = llenarBombas(r,c);
    explotarBombas(gridBeforeExplosion,grid,r,c);
    return (gridBeforeExplosion.map(row => row.join('')));
}

function llenarBombas(r,c){
    let gridLleno = [];
    
    for(let i=0; i<r; i++){
        let row = [];
        for(let j=0; j<c; j++){
            row.push("O");
        }
        gridLleno.push(row);
    }
    return gridLleno;
    
}



function explotarBombas(gridBeforeExplosion,grid,r,c){
    
    
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++){
            if(grid[i][j] === "O"){
                gridBeforeExplosion[i][j] = ".";
                if(gridBeforeExplosion[i-1]){
                    gridBeforeExplosion[i-1][j] = ".";
                }
                if(gridBeforeExplosion[i+1]){    
                    gridBeforeExplosion[i+1][j] = ".";
                }
                if(gridBeforeExplosion[i][j-1]){
                    gridBeforeExplosion[i][j-1] = ".";    
                }
                if(gridBeforeExplosion[i][j+1]){    
                    gridBeforeExplosion[i][j+1] = ".";
                }
            } 
        }

    }
    grid = gridBeforeExplosion;
    return grid;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r = parseInt(firstMultipleInput[0], 10);

    const c = parseInt(firstMultipleInput[1], 10);

    const n = parseInt(firstMultipleInput[2], 10);

    let grid = [];

    for (let i = 0; i < r; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = bomberMan(n, r, c, grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

