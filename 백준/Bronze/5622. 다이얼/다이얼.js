let input = require("fs").readFileSync("dev/stdin").toString().trim();

let numbers = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};

let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 3; j <= 10; j++) {
    if (numbers[j].includes(input[i])) {
      result += j;
    }
  }
}

console.log(result);
