const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const numbers = input
  .shift()
  .split(" ")
  .map((x) => parseInt(x));

let count = 0;

function isPrime(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  count++;
}

for (let i = 0; i < N; i++) {
  isPrime(numbers[i]);
}
console.log(count);
