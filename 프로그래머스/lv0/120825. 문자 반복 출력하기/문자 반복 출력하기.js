function solution(my_string, n) {
    return my_string.split("").map(str => str.repeat(n)).join("");
    
    // my_string 문자열을 빈문자열기준으로 나누어 배열로 만들고
    // 각각의 문자를 n번 반복 (repeat)한 후 빈문자열 기준으로 합친다.
}