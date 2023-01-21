// 의사코드 작성하기
// 6조각짜리 피자의 판 수를 늘려가면서 n명으로 나누었을 때 0이 되는 시점을 찾기


function solution(n) {
    let pizza = 6;
    let i = 1;
    for(let i = 1; i<100; i++) {
        if((pizza * i) % n === 0) return i;
    }
}