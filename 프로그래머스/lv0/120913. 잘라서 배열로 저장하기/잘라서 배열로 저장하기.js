function solution(my_str, n) {
    let result = [];
    let strArr = [...my_str];
    
    // 문자열이 길이를 n씩 잘라 배열에 저장할 반복횟수를 정한다.
    // 문자열의 길이 / n 을 하면 문자열 길이만큼 반복할 수 있다.
    // 문자열을 배열로 변환해서 0부터 n전까지 자르고 문자열로 다시 변환하여 result 배열에 push 한다.
    for(let i = 0; i<my_str.length/n; i++) {
        result.push(strArr.splice(0,n).join(""))
    }
    return result;
}