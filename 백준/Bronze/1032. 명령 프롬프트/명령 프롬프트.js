/* dev/stdin */
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
let patton = [];
for (let i = 0; i < input[0].length; i++) {
  let str = input[0][i];
  for (let j = 0; j < N; j++) {
    if (str !== input[j][i]) {
      str = "?";
      break;
    }
  }
  patton.push(str);
}
console.log(patton.join(""));
