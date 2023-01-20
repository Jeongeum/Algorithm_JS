// 의사코드 작성
// i는 1부터 ~ 1, 1*2, 1*2*3
// while문을 통해 result 가 n보다 작을동안만 팩토리얼 수가 커지도록 한다.

// 의사코드 재작성
// factorial을 1로 기본 값 설정해두고
// for문을 돌면서 factorial을 만들어간다.
// 만약, factorial이 n 과 같다면 팩토리얼이 만들어지기 위해 돈 만큼 커진 i를 반환한다.
// 만약, factorial이 n보다 크다면 n이 되기 위한 만큼의 i를 (즉, i-1) 반환한다.

function solution(n) {
    let facto = 1;
    
    for(let i=1; i<=n; i++) {
        facto *= i;
        
        if(facto === n) return i;
        
        if(facto > n) { 
            return i-1;
        }
    }
}