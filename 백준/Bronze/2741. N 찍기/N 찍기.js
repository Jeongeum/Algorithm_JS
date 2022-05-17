const input = require('fs').readFileSync('dev/stdin').toString();

let result = "";
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  result += i + "\n";
}

console.log(result);