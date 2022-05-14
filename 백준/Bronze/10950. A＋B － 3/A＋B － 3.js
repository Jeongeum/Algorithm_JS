const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  console.log(
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
  );
}