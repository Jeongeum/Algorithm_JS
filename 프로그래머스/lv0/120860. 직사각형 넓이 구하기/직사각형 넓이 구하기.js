// 의사코드 작성하기
// x와 y 각각의 좌표에서 가장 큰 값 - 작은값 하면 너비와 높이가 나온다.

function solution(dots) {
    let width = Math.max(...dots.map(x => x[0])) - Math.min(...dots.map(x => x[0]));
    let height = Math.max(...dots.map(y => y[1])) - Math.min(...dots.map(y => y[1]));
    
    return width*height;
}