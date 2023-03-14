function solution(num, total) {
    // total / num : 연속되는 숫자의 중간 값
    // Math.floor(num/2) : 중간 값의 자리 (몇번째 자리인지)
    const min = Math.ceil(total / num - Math.floor(num/2));
    
    
    return Array.from({length:num}, (_,i) => i+min)
}