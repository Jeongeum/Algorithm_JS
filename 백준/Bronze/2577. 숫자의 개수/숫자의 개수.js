const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");

const num = String(input[0] * input[1] * input[2]);
const arr = num.split("");

for (let i = 0; i < 10; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (parseInt(arr[j]) === i) {
      count++;
    }
  }
  console.log(count);
}