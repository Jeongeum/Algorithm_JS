let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => BigInt(x));

const A = input[0];
const B = input[1];

console.log((A + B).toString());