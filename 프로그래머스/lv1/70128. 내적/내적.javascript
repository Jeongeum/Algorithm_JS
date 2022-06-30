function solution(a, b) {
    let result = 0;
    a.forEach((anum, index) => {
        result += anum * b[index];
    })
    return result;
}