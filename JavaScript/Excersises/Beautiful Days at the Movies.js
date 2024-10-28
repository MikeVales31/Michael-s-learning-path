// Beautiful Days at the Movies (hackerrank)

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
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Write your code here
    /*
    SOLUCION 1
    1) Crear mapa con las especificaciones
    2) Asignarle un indice a cada valor de cada key del mapa
    3) Leer el indice al reves de cada key, guardando el numero resultante
    4) Hacer un valor abs de resta entre el key original y el volteado.
    5) Dividir entre k y comparar si es entero es beatiful y lo contamos
    
    SOLUCION 2
    1)Crear un arreglo con los numeros 
    2)Para cada elemento (forEach) ver su indice haciendolos string 
    3)Crear arreglo con los numeros con indice al reves.
    4)Haver el valor absoluto de la resta entre arreglos
    5)Dividir entre k y comparar si es entero es beatiful y lo contamos
    */
    let  count= 0;
    for(let numero= i; numero<=j; numero++){
       count = contadorBeautifulDay(numero,k,count)
    }
    return count;
}

function contadorBeautifulDay(numero,k,count){
    
    let numeroString = numero.toString();
    let resultado = "";
   
    for(let i=numeroString.length-1; i>=0; i--){
        resultado += numeroString[i]
    }
    
    if(Math.abs(Number(numero-resultado)%k) === 0){
        count++;
    }
    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const i = parseInt(firstMultipleInput[0], 10);

    const j = parseInt(firstMultipleInput[1], 10);

    const k = parseInt(firstMultipleInput[2], 10);

    const result = beautifulDays(i, j, k);



  
    ws.write(result + '\n');

    ws.end();
}

