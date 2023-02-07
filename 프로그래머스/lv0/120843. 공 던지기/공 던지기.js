function solution(numbers, k) {
    let index = 0;
    
    for(let i = 1; i < k; i++) {
        index += 2;
        if(index >= numbers.length) {
            index %= numbers.length;
        }
    }
    return numbers[index];
}