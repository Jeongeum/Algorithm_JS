const input = require("fs").readFileSync("dev/stdin").toString().trim();

let N = parseInt(input);

while (N !== 1) {
  for (let i = 2; i <= N; i++) {
    if (N % i === 0) {
      console.log(i);
      N = N / i;
      break;
    }
  }
}
