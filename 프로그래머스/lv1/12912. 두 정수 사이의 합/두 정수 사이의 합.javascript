function solution(a, b) {
    let result = 0;
    
    if(a === b) return b;
    
    if(a>b) {
        let temp = b;
        b = a;
        a = temp;
    }
    for(let i = a; i<=b; i++) {
        result += i;
    }
    
    return result;
}