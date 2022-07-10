// function solution(n) {
//     if(n===0) {
//         return 0;
//     } else if( n===1) {
//         return 1;
//     } else{
//         return solution(n-2)+solution(n-1);
//     }
// }

function solution(n) {
    let answer = fibo(n);
    return answer;
}

function fibo(n) {
    let fiboArr = new Array(n+1).fill(0);
    fiboArr[0] = 0;
    fiboArr[1] = 1;
    for(let i = 2; i<=n; i++) {
        fiboArr[i] = (fiboArr[i-1] + fiboArr[i-2]) % 1234567;
    }
    return fiboArr[n];
}