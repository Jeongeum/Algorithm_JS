// 명예의 전당 배열 k 길이
// for문 돌면서 크기대로 정렬해서 채우기
// 매 index 때마다 명예의전당 배열에서 가장 작은 수를 result 배열에 넣기
// k개 다 채운 후 부터는 명예의 전당 내 가장 작은 수와 score 비교해서 score가 더 크면 가장 작은 수 삭제하고 크기대로 정렬

function solution(k, score) {
    let result = [];
    let winArr = [];
    
    for(let i = 0; i < score.length; i++) {
        if(i < k) {
            winArr.push(score[i]);
        }
        if(score[i] > Math.min(...winArr)) {
            winArr.pop();
            winArr.push(score[i]);
            winArr.sort((a,b) => b-a);
        }
        
        result.push(Math.min(...winArr))
        
    }
    return result;
}