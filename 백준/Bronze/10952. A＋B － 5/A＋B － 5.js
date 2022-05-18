const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

let result = [];

for (let i = 0; i < input.length; i++) {
  const num = input[i].split(" ").map((x) => parseInt(x));
  if (num[0] + num[1] !== 0) {
    result.push(num[0] + num[1]);
  }
}
console.log(result.join("\n"));