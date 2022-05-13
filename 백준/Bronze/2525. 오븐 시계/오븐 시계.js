const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let A = parseInt(input[0].split(" ")[0]);
let B = parseInt(input[0].split(" ")[1]);
let C = parseInt(input[1]);

B += C;

while (B >= 60) {
  B -= 60;
  A++;
}
A %= 24;

console.log(A + " " + B);
