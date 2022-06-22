function solution(s) {
    let str = s.split(" ");
    
    return str.map(word=>word.split("").map((char,index) =>index %2===0?char.toUpperCase() : char.toLowerCase()).join("")).join(" ")
}