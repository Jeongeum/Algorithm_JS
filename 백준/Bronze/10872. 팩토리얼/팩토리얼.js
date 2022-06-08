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