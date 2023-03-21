function solution(t, p) {
    let result = 0;
    
    for(let i = 0; i < t.length-p.length+1; i++) {
        if(t.substr(i,p.length) <= p) result++;
    }
    
    return result;
}