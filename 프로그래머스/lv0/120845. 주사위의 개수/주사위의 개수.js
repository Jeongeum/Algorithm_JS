// 의사코드 작성하기
// 직육면체에 몇개의 주사위가 들어가는지를 알아내는 문제이다.
// 직육면체의 가로, 세로, 높이 길이를 n(정육면체의 모서리 길이)로 나누어준 후
// 직육면체의 부피 구하는 공식 (가로*세로*높이) 로 계산해준다.

function solution(box, n) {
    let answer = parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
    return answer;
}