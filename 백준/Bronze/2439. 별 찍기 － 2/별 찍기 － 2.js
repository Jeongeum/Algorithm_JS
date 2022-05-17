const input = require('fs').readFileSync('dev/stdin').toString().trim();

let star = "";

for (let i = 0; i < parseInt(input); i++) {
  for (let j = parseInt(input) - 1; j >= 0; j--) {
    star += j <= i ? "*" : " ";
  }
  star += "\n";
}
console.log(star);