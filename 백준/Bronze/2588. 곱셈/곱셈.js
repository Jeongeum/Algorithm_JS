const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a*(b%10));
console.log(a*(Math.floor(b/10)%10));
console.log(a*Math.floor(b/100));
console.log(a*b);