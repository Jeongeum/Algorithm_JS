const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));

const M = input.shift();
const N = input.shift();

let arr = [];
let sum = 0;
function isPrime(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  arr.push(n);
  sum = arr.reduce((acc, cur) => acc + cur, 0);
}

for (let i = M; i <= N; i++) {
  isPrime(i);
}

if (arr.length !== 0) {
  console.log(sum);
  console.log(arr[0]);
} else {
  console.log(-1);
}
