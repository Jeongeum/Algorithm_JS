let input = require("fs").readFileSync("dev/stdin").toString().trim();

const N = parseInt(input);
let arr = [];

function printStars(N) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      star(x, y, N);
    }
    arr.push("\n");
  }
}
function star(x, y, N) {
  if (x % 3 === 1 && y % 3 === 1) {
    arr.push(" ");
  } else {
    if (N === 1) {
      arr.push("*");
    } else {
      star(parseInt(x / 3), parseInt(y / 3), parseInt(N / 3));
    }
  }
}

printStars(N);
console.log(arr.join(""));
