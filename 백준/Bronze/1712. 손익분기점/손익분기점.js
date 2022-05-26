const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

const A = input[0];
const B = input[1];
const C = input[2];

let N = A / (C - B);
let result = Math.floor(N) + 1;
B >= C ? (result = -1) : result;

console.log(result);
