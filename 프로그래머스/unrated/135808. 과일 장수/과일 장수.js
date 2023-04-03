// 1. 큰 수부터 정렬하기 (최대 이익을 내야하기 때문에)
// 2. m개씩 나누고 안나눠지면 버리기
// 3. 나눈 배열에서 가장 작은 값과 m 곱하기 (한상자 가격)
// 4. 다 더하기

function solution(k, m, score) {
    let result = 0;
    
    score = score.sort((a,b) => b-a);
    
    const arr = [];
    
    for(let i = 0; i < score.length; i+=m) {
        arr.push(score.slice(i, i + m))
        
    }
    
    arr.forEach((item,i) => {
        if(item.length !== m) return;
        result += Math.min(...item) * m
    })
    return result;
}