function solution(numbers) {
    let numArr = numbers.sort((a,b) => a-b);
    return Math.max(numArr[0] * numArr[1], numArr[numArr.length-2] * numArr[numArr.length-1]);
}