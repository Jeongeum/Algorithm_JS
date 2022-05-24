const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

for (let i = 0; i < T; i++) {
  let result = "";
  const [R, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < R; k++) {
      result += str[j];
    }
  }
  console.log(result);
}
