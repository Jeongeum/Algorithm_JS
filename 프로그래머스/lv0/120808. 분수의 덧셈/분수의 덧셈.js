function solution(numer1, denom1, numer2, denom2) {
    let result = [];
    
    // 분자
    let num = numer1 * denom2 + numer2 * denom1;
    
    // 분모
    let denum = denom1 * denom2;
    
    // 최소 공약수 gcd를 구해서 분자, 분모와 나눈다.
    const gcd = (a,b) => (a%b === 0) ? b : gcd(b, a%b);
    
    result[0] = num / gcd(num, denum);
    result[1] = denum / gcd(num, denum);
    
    return result;
}