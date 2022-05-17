const input = require('fs').readFileSync('dev/stdin').toString();

let result = "";
const N = parseInt(input);

for (let i = N; i >= 1; i--) {
  result += i + "\n";
}

console.log(result);