function solution(sizes) {
  let w = [];
  let h = [];

  sizes.map((num, i) => {
    w[i] = Math.max(...num);
    h[i] = Math.min(...num);
  });
  return Math.max(...w) * Math.max(...h);
}
