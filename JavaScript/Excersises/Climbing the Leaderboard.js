// Climbing the Leaderboard (hackerrank)

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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(repeatedRanking, player) {
    // Write your code here
    let i=0;
    let j=0;
    let place=[];
    const ranked = Array.from(new Set(repeatedRanking));
    
    player.sort((a,b)=> b-a);
    
    while(i<player.length){
        if(j>=ranked.length){
            if(player[i] < ranked[ranked.length-1]){
                place.push(ranked.length+1)
            }
            i++;
        }
        else if(player[i]>=ranked[j]){
            place.push(j+1);
            i++;
        }
            
            
        else{
            j++;
        }
    }
    return place.reverse();
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
