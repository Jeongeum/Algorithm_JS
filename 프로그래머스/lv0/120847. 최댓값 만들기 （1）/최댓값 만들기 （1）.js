function solution(numbers) {
    numbers.sort((a,b) => a-b);
    let max1 = numbers.pop()
    let max2 = numbers.pop()
    return max1*max2;
}