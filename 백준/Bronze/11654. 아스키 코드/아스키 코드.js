const input = require("fs").readFileSync("dev/stdin").toString().trim();

const result = input.charCodeAt(0);

console.log(result);