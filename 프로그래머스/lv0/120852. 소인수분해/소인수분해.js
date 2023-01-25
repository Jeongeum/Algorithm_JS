// 의사코드 작성하기
// n을 i=2로 나누었을 때 나누어 떨어진다면 또 2로 나누어본다.
// n을 2로 나눌 수 없다면 i를 증가시켜서 나누어본다.
// 나눌때마다 result 배열에는 i 값을 push한다.
// n이 다 나눠질 때 까지 나눈다. (n이 1이 아닐동안)
// result에 있는 중복 값들은 중복을 없애기 위해 set을 이용한다,

function solution(n) {
    let result = [];
    let i = 2;
    
    while(n !== 1) {
        if(n % i === 0) {
            result.push(i);
            n = n/i;
            i = 2;
        } else {
            i++;
        }
    }
    
    
    return [...new Set(result)];
}