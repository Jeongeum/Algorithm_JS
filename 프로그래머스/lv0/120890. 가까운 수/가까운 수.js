// 의사코드 작성
// 배열을 돌면서 배열 내 값과 n을 빼준다. 뺐을 때 음수가 될 수도 있기 때문에 절댓값으로 바꾸어준다.
// 배열 내 값 - n을 계산해서 넣은 새로운 배열에서 가장 작은 수의 인덱스가 1이라면 
// array 배열 인덱스 1을 반환한다. 

function solution(array, n) {
    let result = [];
    // let answer = 0;
    
    array.forEach((item) => {
        result.push(Math.abs(item-n)); // 두 값의 차이를 담은 배열 result
    });
    
    
    const min = Math.min(...result); // 두 값의 차이를 담은 배열에서 가장 작은 수 
    let minArr = [];
    
    for(let i = 0; i<result.length; i++) {
        if(result[i] === min) {
            minArr.push(array[i]);
            // answer = array[i];
        } 
    }
    return Math.min(...minArr);
    // return answer;
}