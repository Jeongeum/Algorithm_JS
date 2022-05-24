const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split("").map((x) => parseInt(x));
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += arr[i];
}
console.log(sum);