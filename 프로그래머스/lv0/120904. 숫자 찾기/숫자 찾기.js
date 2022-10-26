function solution(num, k) {
    num = String(num).split("").map(str => Number(str));
     return num.indexOf(k) === -1 ? -1 : num.indexOf(k)+1;
}