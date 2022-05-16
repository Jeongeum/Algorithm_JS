const input = require("fs").readFileSync("dev/stdin").toString().split("\n")


let result = "";

for (let i = 1; i <= input[0]; i++) {
  tmp = input[i].split(" ");
  result += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
}

console.log(result);
