function solution(n) {
    let divPizza = Math.floor(n/7);
    return n%7 === 0 ? divPizza : divPizza +1;
}