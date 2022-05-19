const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = input[0];
const num = input[1].split(" ").map((x) => parseInt(x));

let min = num[0];
let max = num[0];

for (let i = 1; i < N; i++) {
  if (min > num[i]) {
    min = num[i];
  }

  if (max < num[i]) {
    max = num[i];
  }
}

console.log(min, max);