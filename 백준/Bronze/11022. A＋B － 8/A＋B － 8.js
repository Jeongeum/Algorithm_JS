const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const T = input[0];
let result = "";

for (let i = 1; i <= T; i++) {
  tmp = input[i].split(" ");
  result += `Case #${i}: ${parseInt(tmp[0])} + ${parseInt(tmp[1])} = ${parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"}`;
}

console.log(result);