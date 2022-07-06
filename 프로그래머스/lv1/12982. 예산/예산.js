function solution(d, budget) {
  let count = 0;
  d = d.sort((a, b) => a - b);
  d.forEach((num) => {
    if (budget < num) return;
    count++;
    budget -= num;
  });
  return count;
}
