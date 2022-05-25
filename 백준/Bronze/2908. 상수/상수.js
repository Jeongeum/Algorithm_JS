let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split("").reverse().join("");
}

console.log(Math.max(...input));
