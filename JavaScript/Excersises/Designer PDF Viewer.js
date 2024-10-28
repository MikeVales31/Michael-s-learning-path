//Designer PDF Viewer (hackerrank)

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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    /*
    SOLUCION
    1) Tengo una palabra (word), debo descomponer la palabra en letras.
    2) Busco en que posicion esta la letra en el abcdario.
    3) De la misma posicion encontrada, busco el valor en el arreglo (h),
    4) Una vez encontrado todos lo valores seleccionar el mayor y multiplicar 
    por la cantidad de caracteres de (word) y devolver el resultado.
    */ 
    
    /*
    DUDAS
    1) Mapa (Key) y como setear 
    2) No pude usar Math.max para sacar el valor maximo
    */
    
    let abcdario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let valores = [];
    let valorMaximo = 0;
    let resultado = 0;
    
    for(let i=0; i<word.length;i++){
        for(let j=0; j<abcdario.length;j++){
            if(word[i] === abcdario[j]){
                valores.push(h[j]);
            }
        }    
    }
    for(let k=0; k<valores.length;k++){
        if(valorMaximo<valores[k]){
            valorMaximo = valores[k];
        }
    }
    resultado = valorMaximo * valores.length;
    
    return resultado;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}

