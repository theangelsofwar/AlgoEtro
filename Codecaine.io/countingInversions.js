// https://www.hackerrank.com/challenges/ctci-merge-sort/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString='';
let currentLine=0;
process.stdin.on('data', inputStdin => {
    inputString+=inputStdin;
});

//process input string once stream of input is over
process.stdin.on('end', ()=> {
    inputString=inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*S/,''));
    console.log(inputString, "this is the input string");

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function countInversions(arr){

}

function main() {
    const ws=fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for(let tItr=0; tItr<t; tItr++){
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp,10));

        const result = countInversions(arr);
        ws.write(result + '\n');
    }

    ws.end();
}