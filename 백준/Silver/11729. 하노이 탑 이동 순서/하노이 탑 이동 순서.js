let input = require("fs").readFileSync("dev/stdin").toString().trim();

let N = parseInt(input);
let count = 0;
let result = [];

function hanoi(n, from, other, to) {
  if (n === 0) {
    return;
  } else {
    hanoi(n - 1, from, to, other);
    result.push([from, to]);
    count++;

    hanoi(n - 1, other, from, to);
  }
}

hanoi(N, "1", "2", "3");
console.log(count);
console.log(result.map((x) => x.join(" ")).join("\n"));
