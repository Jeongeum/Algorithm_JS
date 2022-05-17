const input = require('fs').readFileSync('dev/stdin').toString().trim();

let star = "";

for (let i = 0; i < parseInt(input); i++) {
    star += "*";
    console.log(star);
}


