function solution(a, b, n) {
    let result = 0;
    while(n >= a) {
        // 바꿔주는 콜라 병의 수
        result += Math.floor(n/a)*b;
        n = Math.floor(n/a)*b + n%a;
    }
    return result;
}