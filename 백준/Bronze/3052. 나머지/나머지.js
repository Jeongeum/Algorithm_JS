let input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n").map((x) => parseInt(x));

for (let i = 0; i < input.length; i++) {
  input[i] = input[i] % 42;
}
const count = new Set(input).size;
console.log(count);