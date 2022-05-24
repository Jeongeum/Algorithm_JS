function d() {
  let num = 0;
  let arr = [10001];

  for (let i = 1; i <= 10000; i++) {
    if (i < 10) {
      num = i + i;
      arr[num] = 1;
    } else if (i < 100) {
      num = i + Math.floor(i / 10) + (i % 10);
      arr[num] = 1;
    } else if (i < 1000) {
      num =
        i + Math.floor(i / 100) + Math.floor((i % 100) / 10) + ((i % 100) % 10);
      arr[num] = 1;
    } else if (i < 10000) {
      num =
        i +
        Math.floor(i / 1000) +
        Math.floor((i % 1000) / 100) +
        Math.floor(((i % 1000) % 100) / 10) +
        (((i % 1000) % 100) % 10);
      arr[num] = 1;
    } else {
      arr[num] = 1;
    }
  }

  for (let j = 1; j <= 10000; j++) {
    if (arr[j] !== 1) {
      console.log(j);
    }
  }
}

d();
