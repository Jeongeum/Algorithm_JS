// 의사코드 작성하기
// 서비스 치킨 = 치킨 / 10 => 왜냐하면, 치킨 10마리 = 서비스 치킨 1마리 이기 때문!

function solution(chicken) {
    let result = 0;
    
    while(chicken >= 10) {
        result += Math.floor(chicken / 10); // 서비스 치킨 수
        chicken = chicken % 10 + Math.floor(chicken / 10); // 남은 치킨 수
    }
    return result;
}