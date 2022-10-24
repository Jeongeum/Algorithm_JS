function solution(my_string) {
    // replace(/([a-zA-Z])/g, "").split("") : my_string 문자열에서 영어 대/소문자를 찾아 빈문자열로 바꾸고 각 문자를 문자 기준으로 나눈다.
    // map(str => Number(str)) : 각 문자를 기준으로 나뉜 배열을 순회하면서 문자를 숫자로 바꾼다.
    // reduce((acc,cur)=> acc+cur,0) : 초깃값 0부터 시작하여 배열 내 모든 수를 더한다.
    return my_string.replace(/([a-zA-Z])/g, "").split("").map(str => Number(str)).reduce((acc,cur)=> acc+cur,0);
}