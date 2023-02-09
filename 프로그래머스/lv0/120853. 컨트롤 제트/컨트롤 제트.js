// 의사코드 작성하기
// 문자열을 공백기준으로 나누어준다.
// 배열을 순회하면서 숫자를 더한다.
// Z가 나오면 이전 인덱스의 배열 값을 빼준다.

function solution(s) {
    s = s.split(" ");
    let result = 0;
    
    s.forEach((num, index) => {
        if(num === "Z") {
            result -= Number(s[index-1]);
        } else {
            result += Number(num);
        }
    })
    
    return result;
}