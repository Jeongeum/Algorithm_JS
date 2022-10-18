function solution(n) {
    let numArr = String(n).split("").map(num => Number(num))
    return numArr.reduce((acc,cur)=>acc+cur,0)
}