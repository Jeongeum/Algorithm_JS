// 의사코드 작성하기
// 이진수 bin1과 bin2를 10진수로 변환하여 더한다.
// 더한 값을 다시 2진수로 변환한다.

function solution(bin1, bin2) {
   let answer = (parseInt(bin1,2) + parseInt(bin2,2)).toString(2);
    
    return answer;
}