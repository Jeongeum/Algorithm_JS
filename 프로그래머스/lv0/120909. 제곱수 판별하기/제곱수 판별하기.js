function solution(n) {
    let x = Math.sqrt(n);
    return x%1 === 0 ? 1 : 2;
    // 변수 x를 n의 제곱근으로 할당
    // x를 1로 나눈 나머지가 0이면 정수
}