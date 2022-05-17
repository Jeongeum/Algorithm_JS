const input = require('fs').readFileSync('dev/stdin').toString().trim();

let star = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);