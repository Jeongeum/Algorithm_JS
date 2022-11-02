function solution(numbers, direction) {
    let temp = 0;
    if(direction === "left") {
        temp = numbers.shift();
        numbers.push(temp);
    } else {
        temp = numbers.pop();
        numbers.unshift(temp);
    }
    return numbers;
}