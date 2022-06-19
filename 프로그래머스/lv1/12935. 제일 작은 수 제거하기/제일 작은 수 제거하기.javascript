function solution(arr) {
    const min = Math.min(...arr);
    const result = arr.filter(num => num!==min);
    if(result.length === 0) {
        return [-1];
    }
    return result;
}