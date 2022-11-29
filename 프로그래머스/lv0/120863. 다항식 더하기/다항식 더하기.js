function solution(polynomial) {
    let answer = []
    answer.push(polynomial
            .split(" + ")
            .filter((v) => v.includes("x"))
            .map((v) => +v.replace("x", "") || 1)
            .reduce((a, c) => a + c, 0))
    answer.push(polynomial
            .split(" + ")
            .filter((v) => !v.includes("x"))
            .map((v) => +v)
            .reduce((a, c) => a + c, 0))
    if (answer[0] === 1 && answer[1] !== 0){
        return `x + ${answer[1]}`
    }
    if (answer[0] === 1 && answer[1] === 0){
        return `x`
    }
    if (answer[0] !== 1 && answer[1] === 0){
        return `${answer[0]}x`
    }
    if (answer[0] === 0 && answer[1] !== 0){
        return `${answer[1]}`
    }
    if (answer[0] === 0 && answer[1] === 0){
        return ``
    }
    return answer.join("x + ")
}