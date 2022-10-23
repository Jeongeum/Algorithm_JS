function solution(n) {
    let result = [];
    for(let i = 1; i<=n; i++) {
        if(i%2 === 1) result.push(i);
        // i가 홀수이면 result 배열에 push
    }
    return result;
}