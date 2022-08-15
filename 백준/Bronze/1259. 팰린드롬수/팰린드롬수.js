let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

input.pop();

input.forEach((num) => {
  let reverseStr = num.split("").reverse().join("").trim();
  console.log(+reverseStr === +num ? "yes" : "no");
});