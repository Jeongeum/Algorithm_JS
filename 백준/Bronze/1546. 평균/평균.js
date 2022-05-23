const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map((x) => parseInt(x));

const max = Math.max(...arr);

let sum = 0;
for (let j = 0; j < N; j++) {
  arr[j] = (arr[j] / max) * 100;
  sum += arr[j];
}
let avg = parseFloat(sum / N);

console.log(avg);