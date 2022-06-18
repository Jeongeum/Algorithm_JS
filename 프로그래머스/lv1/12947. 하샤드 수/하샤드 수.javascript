function solution(x) {
    const sum = x.toString().split("").map(num=>parseInt(num)).reduce((acc,cur) =>acc+cur);
    return (x%sum===0);
}