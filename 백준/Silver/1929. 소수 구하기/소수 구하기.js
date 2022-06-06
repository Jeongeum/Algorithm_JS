const input = require("fs").readFileSync("dev/stdin").toString().trim();
const [M, N] = input.split(" ").map((x) => parseInt(x));

const arr = {1:true};

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (arr[i]) {
    continue;
  }

  for (let j = i ** 2; j <= N; j += i) {
    arr[j] = true;
  }
}

const result = [];

for (let i = M; i <= N; i++) {
  if (!arr[i]) {
    result.push(i);
  }
}

console.log(result.join("\n"));
