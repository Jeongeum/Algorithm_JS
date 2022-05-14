const input = require('fs').readFileSync('dev/stdin').toString().trim();

const dan = parseInt(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}