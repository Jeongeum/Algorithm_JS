function solution(age) {
    // a가 0이기 때문에 a를 기준으로 아스키코드로 변환
    // console.log('a'.charCodeAt(0)) -> 97
    // age를 배열로 변환하여 각 숫자를 위에 계산한 아스키코드 값에 더한다.
    // 다시 아스키코드를 문자로 변환한다.
    // String.fromCharCode('a'.charCodeAt(0) + age 각 숫자)
    // String.fromCharCode('a'.charCodeAt(0) + str)
 
    const ageStr = (''+age).split("");
    return ageStr.map(str => String.fromCharCode('a'.charCodeAt(0) + parseInt(str))).join("")
}