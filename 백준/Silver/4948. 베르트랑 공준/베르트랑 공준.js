let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));

const max = Math.max(...input) * 2;
let isPrime = Array(max).fill(true);
isPrime[0] = isPrime[1] = false; 

for (let i = 2; i <= Math.ceil(Math.sqrt(max)); i++) {
  if (isPrime[i]) {
    for (let j = i ** 2; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

input.forEach((x) => {
  const first = x;
  const end = 2 * x;

  if (x > 0) {
    let count = 0;

    for (let i = first + 1; i <= end; i++) {
      if (isPrime[i]) {
        count++;
      }
    }
    console.log(count);
  }
});
