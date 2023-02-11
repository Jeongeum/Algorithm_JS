// 의사코드 작성하기
// 만약, side1+side2 > c 일 경우의 범위 -> side1+side2 > c > sides에서 큰 것
// 만약, sides에서 가장 긴 변이 있을 경우의 범위 -> sides 작은 것 + b >= sides 큰 것
// 개수 구해서 더하기

function solution(sides) {
    let count = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    // sides에 이미 가장 긴 변이 있다면
    for(let i = max-min+1; i <= max; i++) {
        count++;
    }
    
    // 나머지 한 변이 가장 긴 변이라면
    for(let i = max+1; i < max+min; i++) {
        count++;
    }
    
    return count;
}