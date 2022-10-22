function solution(slice, n) {
    let divPizza = Math.floor(n/slice);
    return n % slice === 0 ? divPizza : divPizza+1;
}