const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const num = input[0].split(" ").map((x) => parseInt(x));
const arr = input[1].split(" ").map((x) => parseInt(x));

const result = [];

for (let i = 0; i <= num[0]; i++) {
  if (num[1] > arr[i]) {
    result.push(arr[i]);
  }
}

console.log(result.join(" "));