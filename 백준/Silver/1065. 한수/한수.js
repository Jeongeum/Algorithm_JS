const N = require("fs").readFileSync("dev/stdin").toString().trim();

function hansu(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i < 100) {
      count++;
    } else if (i <= 1000) {
      let arr = String(i);
      if (arr[1] - arr[0] === arr[2] - arr[1]) {
        count++;
      }
    }
  }
  console.log(count);
}

hansu(N);
