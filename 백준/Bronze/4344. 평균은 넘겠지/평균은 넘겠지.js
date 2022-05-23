const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const C = Number(input[0]);

for (let i = 1; i <= C; i++) {
  let sum = 0;
  let count = 0;

  const arr = input[i].split(" ").map(Number);
  const N = arr.shift();

  sum = arr.reduce((acc, cur) => (acc += cur), 0);
  const avg = sum / N;

  for (let j = 0; j < N; j++) {
    if (arr[j] > avg) {
      count++;
    }
  }
  console.log(((count / N) * 100).toFixed(3) + "%");
}