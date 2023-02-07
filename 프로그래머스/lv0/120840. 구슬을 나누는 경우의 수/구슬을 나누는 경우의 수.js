// 의사 코드 작성하기
// 힌트로 받은 경우의 수 공식을 이용하기 위해 팩토리얼 함수를 구현한다.
// 팩토리얼 함수에 들어올 수가 1이면 1을 리턴한다.
// 1이 아니면 재귀함수를 이용해서 리턴해준다.

function solution(balls, share) {
    const factorial = (num) => {
        if(num === 1) return 1;
        
        return num * factorial(num-1);
    }
    
    if(balls === share) return 1; // 두 수가 같을경우 0!가 나오므로 고려해주어야함.
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}