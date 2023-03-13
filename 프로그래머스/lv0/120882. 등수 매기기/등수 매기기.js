function solution(score) {
    let arr = [];
    let result = Array.from({length:score.length},() =>1); // 등수 배열
    for(let i = 0; i<score.length; i++) {
            arr[i] = (score[i][0]+score[i][1]) / 2;
    }
    
    for(let i = 0; i<score.length; i++) {
            arr[i] = (score[i][0]+score[i][1]) / 2;
        for(let j = 0; j<score.length; j++) {
            if(arr[j] > arr[i]) result[i]++;
        }
    }
    
    return result;
}