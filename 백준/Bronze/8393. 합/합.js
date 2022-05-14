const input = require("fs").readFileSync("dev/stdin").toString().trim();

const n = input;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);