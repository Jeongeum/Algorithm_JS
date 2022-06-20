function solution(n) {
    const x = Math.sqrt(n);
    return x % 1 === 0 ? Math.pow(x+1,2) : -1;
}