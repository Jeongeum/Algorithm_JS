// 의사코드 작성하기
// 빈 배열 result를 선언한다.
// num_list의 길이가 true일 동안 반복하는데
// num_list 배열에서 0부터 n만큼 제거해서 result 배열에 넣는다.
// 그러면 num_list 배열은 길이가 점점 줄어들 것이다!!

function solution(num_list, n) {
    let result = [];
    
    while(num_list.length) {
        result.push(num_list.splice(0,n));
    }
    
    return result;
}