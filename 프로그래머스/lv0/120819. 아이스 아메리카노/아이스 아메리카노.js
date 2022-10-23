function solution(money) {
    let result = [Math.floor(money/5500) , money%5500];
    return result;
}