let input = require("fs").readFileSync("dev/stdin").toString().trim();

const N = parseInt(input);

function factorial(n) {
  if (n === 0) {
    console.log("1");
  } else {
    let result = 1;
    for (let i = N; i > 0; i--) {
      result *= i;
    }

    console.log(result);
  }
}
factorial(N);

/* 수정 */
const N = parseInt(input);

function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(N));

/* for문 */
if (input === 0 && input === 1) return 1;

let result = 1;

for (let i = 1; i <= input; i++) {
  result *= i;
}

console.log(result);
