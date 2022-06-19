function solution(n, m) {
    const gcd = calculator(n,m);
    return [gcd, n*m/gcd];
}    
    const calculator = (a,b) => {
        if(b===0) return a;
        else return calculator(b,a%b);
    };
    
