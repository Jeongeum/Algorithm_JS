function solution(arr, divisor) {
    let result = arr.filter(num=> num%divisor === 0);
    
    result.length === 0 ? result.push(-1) : result.sort((a,b)=> {
        return a-b;
    })
    
    return result;
}