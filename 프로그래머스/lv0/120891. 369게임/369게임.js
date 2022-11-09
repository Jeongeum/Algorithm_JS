function solution(order) {
    let arr = [...(''+order)].filter(str => str === '3' || str === '6' || str === '9')
    
    return arr.length;
}