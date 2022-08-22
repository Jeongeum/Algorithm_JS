/* dev/stdin */
let T = require("fs").readFileSync("dev/stdin").toString().trim();

const button = [300, 60, 10];
const count = [0, 0, 0];

for (const i in button) {
  if (T >= button[i]) {
    count[i] = Math.floor(T / button[i]);
    T %= button[i];
  }
}

console.log(T != 0 ? -1 : count.join(" "));
