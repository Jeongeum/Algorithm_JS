// 의사 코드
// 두 수의 최대공약수를 찾아야 한다
// b의 약수를 구한 후, 2와 5가 아닌 수가 나오면 

// gcd

// a와 b의 크기 비교하기
// 작은 것을 기준으로 1부터 7까지 순회를 돌면서 b가 마지막으로 나누어떨어지는 순간의 값을 저장
// 
function solution(a, b) {
    let answer = 0;
    let divider = 0;
    let divArr = [];
    
    if(a%b === 0) return 1;
    if(a > b) {
        for(let i = 1; i<=b; i++) {
            if(a % i === 0 && b % i === 0) divider = i;
            console.log(divider)
        }
        b = b / divider;
        while(b % 2 === 0) {
            b /= 2;
        }
        while(b % 5 === 0) {
            b /= 5;
        }
        if(b===1) return 1;
        else return 2;
    } else if(a === b) {
        answer = 1;
    } else {
        for(let i = 1; i<=a; i++) {
            if(a % i === 0 && b % i === 0) divider = i;
        }
        b = b / divider;
        // console.log(b)
        
        while(b % 2 === 0) {
            b /= 2;
        }
        while(b % 5 === 0) {
            b /= 5;
        }
        
        if(b===1) return 1;
        else return 2;
        // if( b % 2 === 0 || b % 5 === 0) answer = 1;
        // else answer = 2;
    }
    // console.log(divider)
    return answer;
}