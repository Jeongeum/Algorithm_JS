let input = require("fs").readFileSync("dev/stdin").toString().trim();

const N = parseInt(input);
let arr = Array(N + 1);

function fibo(n) {
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  console.log(arr[n]);
}
fibo(N);
