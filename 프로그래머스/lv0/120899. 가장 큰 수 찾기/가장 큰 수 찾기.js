function solution(array) {
    const result = [Math.max(...array),array.indexOf(Math.max(...array))];
    return result;
}