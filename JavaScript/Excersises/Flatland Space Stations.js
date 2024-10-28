//Flatland Space Stations (hackerrank)

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(cities, stations) {
    
    const distanceToStations = [];
    
    for(let city = 0; city < cities; city++) {
        distanceToStations.push(minDistance(city, stations));
    }
    
    return Math.max(...distanceToStations);
}

function minDistance(city,stations) {
    // MAX DISTANCE refers to the maximum value I can have between a city and station
    const MAX_DISTANCE = 100000;
    
    let minDistance = MAX_DISTANCE;
    
    for(let station of stations) {
        const distance = Math.abs(city - station);
        if(distance < minDistance)
            minDistance = distance;
    }
    return minDistance;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}

