// 의사코드 작성하기
// 1. 먼저 생각했던 방식
// 1부터 n까지 돌면서 while문을 통해 i를 1부터 n까지 나눠준다,
// 나눠서 0이 되면 count를 증가시킨다.
// count가 3 이상이면 약수가 3개 이상인 수이기 때문에 result를 증가시킨다,

// 2. 최종 방식
// 합성수는 소수가 아닌 자연수라는 것을 기억하면 이 문제는 쉽다.
// 소수인지 아닌지를 판별한 후 소수가 아니라면 합성수이므로 result를 증가시킨다.

function solution(n) {
    let result = 0;
    
    // true이면 소수가 아닌 것, false이면 소수인 것
    function isPrime(num) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num%i === 0) return true;
        }
            return false;
    }
    
    for(let i = 1; i <= n; i++) {
        if(isPrime(i)) result++;
    }
    
    return result;
    
//     let result = 0;
//     let count = 0;
//     let num = 1;
    
//     for(let i = 1; i<=n; i++) {
//         while(num<=i) {
//             if(i%num === 0) {
//                 count++;
//             }
//         }
//         if(count>=3) {
//             result++;
//         }
//     }
//     return result;
}