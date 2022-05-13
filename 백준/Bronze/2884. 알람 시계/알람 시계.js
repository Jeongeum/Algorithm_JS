const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');

let H = parseInt(input[0]);
let M = parseInt(input[1]);

M-=45;

if(M<0) {
    M+=60;
    H--;
    if(H === -1) {
        H=23;
    }
}

console.log(H+' '+M);