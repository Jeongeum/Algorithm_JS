/* dev/stdin */
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

const N = input.shift();
const cows = input.sort((a, b) => a[0] - b[0]);
let time = 0;

for (let i = 0; i < N; i++) {
  const [arrive, check] = cows[i];
  if (arrive >= time) {
    time = arrive + check;
  } else time += check;
}

console.log(time);
