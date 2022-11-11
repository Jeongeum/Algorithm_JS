function solution(my_string, num1, num2) {
    let strCopy = [...my_string];
    
    // 자리 바꾸기1
    // [strCopy[num1], strCopy[num2]] = [strCopy[num2], strCopy[num1]];
    
    // 자리 바꾸기2
    let temp = '';
    temp = strCopy[num1];
    strCopy[num1] = strCopy[num2];
    strCopy[num2] = temp;
    
    return strCopy.join("")
}