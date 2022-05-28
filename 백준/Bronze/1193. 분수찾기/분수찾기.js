let input = require("fs").readFileSync("dev/stdin").toString().trim();

let count = 0;

while (input > 0) {
  count++;
  input -= count;
}

if (count % 2 === 0) {
  console.log(`${count + input}/${1 + -input}`);
} else {
  console.log(`${1 + -input}/${count + input}`);
}
