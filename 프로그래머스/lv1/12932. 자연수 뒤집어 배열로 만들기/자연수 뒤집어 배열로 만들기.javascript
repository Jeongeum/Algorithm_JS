function solution(n) {
    return n.toString().split("").map(num=>parseInt(num)).reverse();
}